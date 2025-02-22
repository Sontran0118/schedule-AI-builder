// src/PdfUpload.js

import React, { useState } from 'react';

function PdfUpload() {
    const [pdf, setPdf] = useState(null);

    const handleFileChange = (e) => {
        setPdf(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('pdf', pdf);

        const response = await fetch('http://127.0.0.1:5000/api/parse-pdf', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        console.log(result);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Upload PDF</button>
        </form>
    );
}

export default PdfUpload;
