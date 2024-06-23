# Automated Data Analysis Application

This project demonstrates a simple web application for automated data analysis. It consists of two main components:
- `DataForm`: Allows users to submit data entries.
- `DataChart`: Displays the submitted data in a line chart using Chart.js.

## Installation and Setup

### Clone the Repository

```bash
git clone <[repository-url](https://github.com/Yashop181/Data-Analysis-MERN.git)>
Backend Setup
Ensure you have a backend running that supports the API endpoints expected by DataForm.js to store and retrieve data. This README assumes the backend is available at http://localhost:8000/api/data.


Frontend Setup
Install dependencies using npm or yarn.

npm install
# or
yarn install

Running the Application
Start the development server.

npm start
# or
yarn start
This will run the frontend React application. Open http://localhost:3000 to view it in the browser.

Components

DataForm

Provides a form to submit data consisting of a numeric value and a timestamp.
Validates input fields to ensure both are filled before submission.
Sends data to the backend API (POST /api/data) and handles errors.

DataChart

Fetches data from the backend API (GET /api/data) upon component mount.
Displays the fetched data using a Line chart rendered with Chart.js.
Handles loading states and errors gracefully.

Dependencies

React.js
axios
react-chartjs-2
Chart.js

Notes
Ensure the backend API is running and accessible at http://localhost:8000/api/data for the application to function correctly.
Adjust API endpoints or backend configurations in the code as per your setup.

