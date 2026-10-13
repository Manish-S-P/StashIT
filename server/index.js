require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000;
const Stash = require("./models/stash");

app.get("/api/health", (req, res)=>{
    res.json({status: "ok"});
});

connectDB()
.then(()=>{
    app.listen(PORT, () =>{
        console.log(`The server is running on ${PORT}`);
    });
})
.catch((err) =>{
    console.log("MongoDB connection is faied",err.message);
    process.exit(1);
});


//testing of the schema

app.get("/api/test-stash", async (req, res) => {
  try {
    const stash = await Stash.create({
      name: "Test Stash",
      passwordHash: "fake-hash-for-now",
      expiresAt: new Date(Date.now() + 2 * 60 * 1000),
    });
    res.json(stash);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});