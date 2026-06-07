const File = require("../models/File");

// Upload file
const uploadFile = async (req, res) => {
  try {
    const { username, filename, content } = req.body;
    if (!username || !filename) {
      return res.status(400).json({ message: "Missing fields" });
    }
    const file = await File.create({ username, filename, content });
    res.status(201).json({ file });
  } catch (error) {
    res.status(500).json({ message: "Error uploading file" });
  }
};

// Get files for a specific user
const getFiles = async (req, res) => {
  try {
    const { username } = req.query;
    if (!username) {
      return res.status(400).json({ message: "Username required" });
    }
    // 🔑 Only return files belonging to this username
    const files = await File.find({ username });
    res.json(files);
  } catch (error) {
    res.status(500).json({ message: "Error fetching files" });
  }
};

// Delete file
const deleteFile = async (req, res) => {
  try {
    const { id } = req.params;
    await File.findByIdAndDelete(id);
    res.json({ message: "File deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting file" });
  }
};

module.exports = { uploadFile, getFiles, deleteFile };
