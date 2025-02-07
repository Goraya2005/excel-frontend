"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [query, setQuery] = useState("");
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);
  const [queryResults, setQueryResults] = useState<string[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setErrorMessage("Please select a PDF file to upload.");
      return;
    }
    setErrorMessage(null);
    setUploadMessage("Uploading file...");
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch("https://your-fastapi-backend.render.com/upload/", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || "Failed to upload file");
      }
      setUploadMessage("File uploaded and processed successfully.");
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  const handleQuery = async () => {
    if (!query) {
      setErrorMessage("Please enter a query.");
      return;
    }
    setErrorMessage(null);
    setQueryResults(null);
    try {
      const response = await fetch("https://your-fastapi-backend.render.com/query/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ query }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || "Failed to retrieve results");
      }
      setQueryResults(data.results);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold">PDF Query System</h1>
      <input type="file" accept=".pdf" onChange={handleFileChange} className="my-2" />
      <button onClick={handleUpload} className="p-2 bg-blue-500 text-white rounded">
        Upload PDF
      </button>
      {uploadMessage && <p className="text-green-500">{uploadMessage}</p>}
      <input
        type="text"
        placeholder="Enter query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="my-2 p-2 border rounded"
      />
      <button onClick={handleQuery} className="p-2 bg-green-500 text-white rounded">
        Search
      </button>
      {queryResults && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Results:</h2>
          <ul>
            {queryResults.map((result, index) => (
              <li key={index} className="border p-2 my-1">
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}
      {errorMessage && <p className="text-red-500">Error: {errorMessage}</p>}
    </div>
  );
}
