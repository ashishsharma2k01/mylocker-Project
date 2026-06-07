import React, { useState } from 'react'

const UploadBox = ({ onUploadSuccess }) => {

    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleUpload = async () => {

        if (!file) {
            alert("Please select a file")
            return
        }

        try {
            setLoading(true)

            const username = localStorage.getItem("username")

            const response = await fetch("https://mylocker-api.onrender.com/api/file/upload", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    filename: file.name,
                    content: "dummy content (no multer yet)"
                })
            })

            const data = await response.json()

            if (response.ok) {
                alert("Uploaded successfully")

                if (typeof onUploadSuccess === "function") {
                    onUploadSuccess(data.file)
                }

                setFile(null)
                document.getElementById("fileInput").value = ""

            } else {
                alert(data.message || "Upload failed")
            }

        } catch (error) {
            console.log(error)
            alert("Server error")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto mt-6'>

            <h2 className='text-xl font-bold mb-4'>Upload Document</h2>

            <div className='flex items-center justify-between'>

                <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                    className='hidden'
                />

                <label htmlFor="fileInput">
                    <div className='bg-gray-200 px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-300'>
                        Choose File
                    </div>
                </label>

                <button
                    onClick={handleUpload}
                    disabled={loading}
                    className='bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 disabled:opacity-50'
                >
                    {loading ? "Uploading..." : "Upload"}
                </button>

            </div>

            {file && (
                <p className='mt-3 text-sm text-gray-600'>
                    Selected: {file.name}
                </p>
            )}

        </div>
    )
}

export default UploadBox