const File = require("../models/File");

const uploadFile = async (req, res) => {
    try {
        const { username, filename, content } = req.body;

        if (!username || !filename) {
            return res.status(400).json({ message: "missing file" });
        }
        const file = await File.create({ username, filename, content });
        res.status(201).json({ file })

    } catch (error) {
        res.status(500).json({ message: "error uploading file" })
    }
}

const getFiles = async (req, res) => {
    try {
        const { username } = req.params;

        const files = await File.find({ username });
        res.status(200).json({ files })

    } catch (error) {
        return res.status(500).json({
            message: "error fetching file"
        })
    }
}

const deleteFile = async (req, res) => {
    const { id } = req.params;

    try {
        const file = await File.findByidAnddelete(id);
        if (!file) {
            return res.status(404).json({
                message: "file not found"
            })
        }
        res.status(200).json({
            message: "file deleted successfully"
        })

    } catch (error) {
        res.status(500).json({
            message: "error deleting file"
        })
    }
}

module.exports = { uploadFile, getFiles, deleteFile };