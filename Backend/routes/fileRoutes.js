const express = require("express")
const router = express.Router()

const {
    uploadFile,
    getFiles,
    deleteFile
} = require("../controllers/fileController")

router.post("/upload", uploadFile)
router.get("/files", getFiles)
router.delete("/:id", deleteFile)

module.exports = router