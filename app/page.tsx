'use client';

import Copyright from '@/app/components/Copyright';
import { useState, ChangeEvent, FormEvent } from 'react';
import axios, { AxiosError } from 'axios';

const Home = () => {
  const [file, setFile] = useState<File | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [uploading, setUploading] = useState<boolean>(false);
  const [querying, setQuerying] = useState<boolean>(false);

  // const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://excel-backend-3k10.onrender.com';
  // const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://excel-backend-3k10.onrender.com';
  const API_BASE_URL = 'https://excel-backend-3k10.onrender.com';



  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return alert('Please select a file first.');

    const formData = new FormData();
    formData.append('file', file);

    try {
      setUploading(true);
      const res = await axios.post(`${API_BASE_URL}/upload/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Upload Response:', res.data);
      alert(res.data.message || 'File uploaded successfully!');
    } catch (error: unknown) {
      const err = error as AxiosError<{ detail?: string }>;
      console.error('Upload Error:', err);
      alert(`Error uploading file: ${err.response?.data?.detail || err.message}`);
    } finally {
      setUploading(false);
    }
  };

  const handleQuery = async (e: FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return alert('Please enter a valid question.');

    try {
      setQuerying(true);
      const res = await axios.post<{ response: string }>(`${API_BASE_URL}/query/`, { prompt });
      console.log('Query Response:', res.data);
      setResponse(res.data.response);
    } catch (error: unknown) {
      const err = error as AxiosError<{ detail?: string }>;
      console.error('Query Error:', err);
      alert(`Error fetching response: ${err.response?.data?.detail || err.message}`);
    } finally {
      setQuerying(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: 'url("/uaf2.JPEG")' }}>
      <div className="w-full max-w-6xl bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/4 h-64 md:h-auto bg-no-repeat bg-contain bg-center md:p-4 bg-white bg-opacity-80 rounded-xl"
          style={{ backgroundImage: 'url("/mni-3.jpg")' }}></div>

        <div className="md:w-3/4 p-8 flex flex-col justify-center space-y-8">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 drop-shadow-lg">EXCEL DATA ANALYSIS</h1>
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Upload an Excel file and conduct various data analysis tests.
          </h2>

          <div className="w-full bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Upload File</h2>
            <input type="file" accept=".txt,.xlsx,.xls"
              onChange={handleFileChange}
              className="mb-6 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button onClick={handleUpload} disabled={uploading}
              className={`w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 ${
                uploading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 transform hover:scale-105'}`}>
              {uploading ? 'Uploading...' : 'Upload'}
            </button>
          </div>

          <div className="w-full bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Ask a Question</h2>
            <form onSubmit={handleQuery} className="flex flex-col space-y-4">
              <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your question here..."
                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button type="submit" disabled={querying}
                className={`w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 ${
                  querying ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700 transform hover:scale-105'}`}>
                {querying ? 'Querying...' : 'Submit'}
              </button>
            </form>
          </div>

          <div className="w-full bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Response</h2>
            <div className="p-4 border border-gray-300 rounded-lg min-h-[250px] bg-gray-50">
              {response ? (
                <p className="text-gray-800 whitespace-pre-wrap">{response}</p>
              ) : (
                <p className="text-gray-400">Your response will appear here.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Home;
