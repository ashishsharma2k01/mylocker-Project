const mongoose = require("mongoose")

const fileSchema = new mongoose.Schema({
    username: String,
    filename: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("File", fileSchema)