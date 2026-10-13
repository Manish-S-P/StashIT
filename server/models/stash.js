const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    originalName : {type : String, required: true},
    size: {type: Number, required: true},
    r2Key: {type: String , required: true},
    mimeType: {type: String, required: true},
    uploadedAt: {type: Date, default: Date.now},
});

const stashSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    passwordHash:{
        type: String,
        required: true,
    },
    expiresAt:{
        type:Date,
        required:true,
    },
    files: [fileSchema],
},
{timestamps:true}
);

stashSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model("Stash", stashSchema);