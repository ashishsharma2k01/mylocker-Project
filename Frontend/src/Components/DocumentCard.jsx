import React from "react"

const DocumentCard = ({ file, onDelete, onView }) => {

    if (!file) return null

    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-xl max-w-md mx-auto shadow-md mt-3">

            <h3 className="font-medium text-gray-700">
                📄 {file?.filename || "Untitled File"}
            </h3>

            <div className="flex gap-3">

                <button
                    onClick={() => onView(file)}
                    className="text-blue-600 hover:underline"
                >
                    View
                </button>

                {/* DELETE */}
                <button
                    onClick={() => onDelete(file._id)}
                    className="text-red-500 hover:underline"
                >
                    Delete
                </button>

            </div>

        </div>
    )
}

export default DocumentCard