require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000;

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
