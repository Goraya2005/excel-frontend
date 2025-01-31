# RAG Application

A powerful **Retrieve and Generate (RAG)** application that leverages FastAPI for the backend and Next.js with TypeScript and Tailwind CSS for the frontend. This application allows users to upload documents, create embeddings, build an index, and query the index using Google Generative AI to generate insightful responses.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

- **File Upload:** Supports uploading `.txt`, `.xlsx`, and `.xls` files.
- **Document Processing:** Converts uploaded files into text and creates embeddings.
- **Indexing:** Builds a vector store index for efficient retrieval.
- **Query Interface:** Allows users to input prompts and receive AI-generated responses.
- **Responsive Frontend:** User-friendly interface built with Next.js and Tailwind CSS.
- **CORS Enabled:** Facilitates seamless communication between frontend and backend.

## Technologies Used

- **Backend:**
  - [FastAPI](https://fastapi.tiangolo.com/) - Web framework for building APIs.
  - [LangChain](https://langchain.com/) - Framework for developing applications with LLMs.
  - [Google Generative AI](https://cloud.google.com/generative-ai) - Language model for generating responses.
  - [Pandas](https://pandas.pydata.org/) - Data manipulation and analysis.
  - [Python Dotenv](https://github.com/theskumar/python-dotenv) - Loads environment variables.
  - [Logging](https://docs.python.org/3/library/logging.html) - Logging framework.

- **Frontend:**
  - [Next.js](https://nextjs.org/) - React framework for building web applications.
  - [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
  - [Axios](https://axios-http.com/) - Promise-based HTTP client.

## Getting Started

### Prerequisites

- **Backend:**
  - Python 3.8+
  - pip
  - Google Cloud account with Generative AI access.

- **Frontend:**
  - Node.js 14+
  - npm or yarn

### Installation

#### Backend Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/rag-application.git
   cd rag-application/backend
   ```

2. **Create a Virtual Environment:**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure Environment Variables:**

   Create a `.env` file in the `backend` directory with the following content:

   ```env
   GOOGLE_API_KEY=your_google_api_key_here
   ```

   Replace `your_google_api_key_here` with your actual Google API key.

#### Frontend Setup

1. **Navigate to Frontend Directory:**

   ```bash
   cd ../frontend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

## Environment Variables

The application requires certain environment variables to function correctly. Ensure you have a `.env` file set up in the backend directory with the necessary variables.

### Backend `.env` Example

```env
GOOGLE_API_KEY=your_google_api_key_here
```

## Running the Application

### Start the Backend Server

1. **Navigate to Backend Directory:**

   ```bash
   cd backend
   ```

2. **Activate Virtual Environment:**

   ```bash
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Run the FastAPI Server:**

   ```bash
   uvicorn main:app --reload
   ```

   The backend API will be accessible at `http://localhost:8000`.

### Start the Frontend Server

1. **Navigate to Frontend Directory:**

   ```bash
   cd frontend
   ```

2. **Run the Next.js Development Server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The frontend will be accessible at `http://localhost:3000`.

## API Endpoints

### 1. Upload File

- **Endpoint:** `/upload/`
- **Method:** `POST`
- **Description:** Uploads a file (`.txt`, `.xlsx`, `.xls`), processes it, creates embeddings, and builds the index.
- **Request:**
  - **Form Data:**
    - `file`: The file to upload.
- **Responses:**
  - `200 OK`: File uploaded and index created successfully.
  - `400 Bad Request`: Unsupported file type or invalid file.
  - `500 Internal Server Error`: Failed to process the file or create the index.

### 2. Query Index

- **Endpoint:** `/query/`
- **Method:** `POST`
- **Description:** Queries the index with a user-provided prompt and returns the generated response.
- **Request:**
  - **JSON Body:**
    - `prompt` (string): The question or prompt to query.
- **Responses:**
  - `200 OK`: Returns the generated response.
  - `400 Bad Request`: Empty prompt or index not initialized.
  - `500 Internal Server Error`: Failed to process the query.

## Usage

1. **Upload a File:**
   - Navigate to the frontend application.
   - Use the **Upload File** section to select and upload a `.txt`, `.xlsx`, or `.xls` file.
   - Wait for the upload to complete. A success message will appear upon successful upload and indexing.

2. **Ask a Question:**
   - In the **Ask a Question** section, enter your prompt or question.
   - Submit the form to query the index.
   - The AI-generated response will appear in the **Response** section.

## Troubleshooting

- **CORS Issues:**
  - Ensure that the backend server is running on `http://localhost:8000` and the frontend is allowed in the CORS settings. Adjust the `allow_origins` in `main.py` if necessary.

- **Environment Variables:**
  - Verify that the `.env` file contains the correct `GOOGLE_API_KEY`.
  - Restart the backend server after updating environment variables.

- **Dependency Issues:**
  - Ensure all dependencies are installed correctly. Reinstall if necessary:
    ```bash
    pip install -r requirements.txt
    npm install
    ```

- **Port Conflicts:**
  - Ensure that ports `8000` (backend) and `3000` (frontend) are free. Change ports in the configuration if needed.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

2. **Create a Feature Branch:**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes:**

   ```bash
   git commit -m "Add your feature"
   ```

4. **Push to the Branch:**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Note:** Replace placeholder URLs, repository links, and other placeholders with actual information relevant to your project.