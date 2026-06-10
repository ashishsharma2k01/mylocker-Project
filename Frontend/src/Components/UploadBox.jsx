import React, { useState } from 'react'

const Uploadbox = () => {

    const [loading, setloading] = useState(false);
    const [file, setfile] = useState(null);

    const handleupload = async () => {

        if (!file) {
            alert("Please select a file")
            return
        }

        try {

            setloading(true)

            const username = localStorage.getItem("username")

            const response = await fetch("https://mylocker-api.onrender.com/api/file/upload", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    username,
                    filename: file.name,
                    content: "Blank Now"
                })
            });

            const data = await response.json();

            if (response.ok) {

                alert("file uploaded successfully")

                setfile(null)

            }
        } catch (error) {
            console.error(error)
            alert("server error")

        } finally {
            setloading(false)
        }

    }

    return (
        <div className='bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto mt-6'>
            <h2 className='text-xl font-bold mb-4'>Upload Document</h2>

            <div className='flex justify-between'>
                <input type="file"
                    className='hidden'
                    id='fileinput'
                    onChange={(e) => { setfile(e.target.files[0]) }}
                />

                <label htmlFor="fileinput">
                    <div className='bg-gray-200 px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-300'>
                        {file ? file.name : "Choose file"}
                    </div>
                </label>

                <button
                    onClick={handleupload}
                    className='bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 disabled:opacity-50 hover: cursor-pointer'
                    disabled={loading}
                >
                    {loading ? "Uploading..." : "Upload"}
                </button>

            </div>
        </div>
    )
}

export default Uploadbox