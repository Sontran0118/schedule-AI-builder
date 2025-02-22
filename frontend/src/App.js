import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (event) => {
    setPdfFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('pdf', pdfFile);

    try {
      const response = await axios.post('http://localhost:5000/api/parse-pdf', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading PDF', error);
    }
  };

  return (
    <div className="App">
      <h1>Upload Your PDF</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload PDF</button>
      </form>
    </div>
  );
}

export default App;
