# Image Upload Project

## Description
The **Image Upload** project allows users to upload images and store them in a database. The project is split into two parts: the **client-side** (built with **React** and **Vite**) and the **server-side** (built with **Express**, **Mongoose**, **Cors**, **Dotenv**, and file upload handled via **Multer**, **Cloudinary**, and **Streamifier**). This project demonstrates how to upload images to the cloud (using Cloudinary) and integrate it with a React frontend.

## Features
- Upload images to a cloud storage (Cloudinary).
- Image preview before uploading.
- Full-stack architecture with React for the frontend and Express for the backend.
- File upload functionality with error handling.
- Stores image URL in the database (MongoDB).

## Technologies Used
### Server-side:
- **Express**: Backend framework to handle requests.
- **Mongoose**: MongoDB ORM for easy data interaction.
- **Cors**: To handle cross-origin resource sharing.
- **Dotenv**: To manage environment variables securely.
- **Multer**: Middleware for handling file uploads.
- **Cloudinary**: Cloud storage solution for uploading and storing images.
- **Streamifier**: Streams the uploaded file to Cloudinary.

### Client-side:
- **Vite**: Fast build tool to optimize the React application.
- **React**: Frontend framework to build the user interface.
  
## Installation Instructions

### Prerequisites:
- Node.js installed on your machine (You can download it from [here](https://nodejs.org/)).
- A Cloudinary account (for image storage). [Sign up here](https://cloudinary.com/).
  
### Setup Instructions:

1. **Clone the repository** to your local machine:
   ```bash
   git clone <repository-url>

2. Install Dependencies for Both Client and Server

### For the Server-Side:
1. Navigate to the `server` directory.
2. Install the server-side dependencies:
    ```bash
    cd server
    npm install
    ```

### For the Client-Side:
1. Navigate to the `client` directory.
2. Install the client-side dependencies:
    ```bash
    cd client
    npm install
    ```

## Create a `.env` File for Server-Side Configuration
1. Create a `.env` file in the `server` directory.
2. Add your Cloudinary API credentials:
    ```bash
    CLOUD_NAME=<your-cloud-name>
    CLOUD_API=<your-api-key>
    CLOUD_SECRET=<your-api-secret>
    PORT=5050
    ```

## Start the Server
1. Navigate to the `server` directory and run:
    ```bash
    npm start
    ```

## Start the Client
1. Navigate to the `client` directory and run:
    ```bash
    npm run dev
    ```

## Running the Application
- The backend will run on `http://localhost:5050`.
- The frontend (React) will run on `http://localhost:3000`.

## How to Use
1. Open the frontend in your browser (`http://localhost:3000`).
2. Select an image to upload, and it will be sent to the backend.
3. The image will be uploaded to Cloudinary, and the URL will be stored in the database.

## Live Demo
The project will be live soon. You can access the live version at: [Live Link](#)