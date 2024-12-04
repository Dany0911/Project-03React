React Front-End for REST API
Project Overview:
This is the third project of the course FullStackDeveloper at Laurea University.
This React application provides a front-end interface for managing blog subscribers via a REST API. Users can perform CRUD (Create, Read, Update, Delete) operations and search for specific subscribers. The app is styled using Bootstrap and includes intuitive navigation features.

Features:
Data Display on Load: Displays a list of subscribers when the page loads.
Subscriber Management: Users can add new subscribers with details (Name, Email, Channel, Topic), view individual subscriber details, edit information, and delete entries.
Search Functionality: Includes a search bar to filter subscribers by name.
Full API Utilization: The app uses all available REST API paths for comprehensive functionality.
Technologies Used
React: Front-end framework.
Bootstrap: For responsive and styled UI components.
Axios: For API requests.
Node.js & Express (back-end): REST API implementation.
Mongoose (back-end): Database.

Important Note:
To run the application without errors, please ensure you have a CORS (Cross-Origin Resource Sharing) extension enabled in your browser. This is necessary because the REST API was deployed on Render, and modifying the deployed code to handle CORS directly wasn’t possible. Using a CORS add-on will facilitate smooth communication between the React front-end and the API.
If doesn't work on Render build it and run it locally.