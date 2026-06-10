import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import UploadBox from '../Components/UploadBox'
import Cards from '../Components/DocumentCard'

const Dashboard = () => {

  const [files, setFiles] = useState([])

  const handleDelete = (fileToDelete) => {
    setFiles(files.filter(file => file !== fileToDelete))
  }

  const handleView = (file) => {
    alert(`Viewing ${file.name}`)
  }

  return (
    <>
      <Navbar />

      <UploadBox setFiles={setFiles} />

      {files.map((file, index) => (
        <Cards
          key={index}
          file={file}
          onDelete={handleDelete}
          onView={handleView}
        />
      ))}
    </>
  )
}

export default Dashboard