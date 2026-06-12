const express = require("express");
const router = express.router();
const {uploadFile, getFiles, deleteFile} = require("./controllers/fileController");

router.post("/upload", uploadFile);
router.get("/:username", getFile);
router.delete("/:id", deleteFile);

module.exports = router;