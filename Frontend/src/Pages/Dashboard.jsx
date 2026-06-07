import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import UploadBox from "../Components/UploadBox";
import DocumentCard from "../Components/DocumentCard";

const Dashboard = () => {
  const [files, setFiles] = useState([]);

  // Fetch only files for the logged-in user
  const fetchFiles = async () => {
    try {
      const username = localStorage.getItem("username");
      const response = await fetch(
        `https://mylocker-api.onrender.com/api/file/files?username=${username}`
      );
      const data = await response.json();
      setFiles(data);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  // Add new file after upload
  const handleUploadSuccess = (newFile) => {
    setFiles((prev) => [...prev, newFile]);
  };

  // Delete file
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/file/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setFiles((prev) => prev.filter((file) => file._id !== id));
      }
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  // View file (for now just alert)
  const handleView = (file) => {
    alert(`Viewing file: ${file.filename}`);
  };

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl max-w-md mx-auto font-bold flex justify-center">
          Your Documents
        </h1>
      </div>
      <UploadBox onUploadSuccess={handleUploadSuccess} />
      {files.map((file) => (
        <DocumentCard
          key={file._id}
          file={file}
          onDelete={handleDelete}
          onView={handleView}
        />
      ))}
    </div>
  );
};

export default Dashboard;
