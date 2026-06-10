import React from 'react'

const Cards = ({ file, onDelete, onView }) => {
    if (!file) return null
    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-xl max-w-md mx-auto shadow-md mt-3">
            <h3 className="font-medium text-gray-700">
                {file ? file.name : "untitled file"}
            </h3>
            <div className='flex gap-3 px-2 hover:cursor-pointer ml-auto'
            >
                <button className='hover:cursor-pointer'
                    onClick={() => onView(file)} >
                    👁️
                </button>
            </div>

            <div className='flex gap-3 px-2 hover:cursor-pointer'>
                <button className='hover:cursor-pointer'
                    onClick={() => onDelete(file)} >
                    🗑️
                </button>
            </div>
        </div>
    )
}

export default Cards
