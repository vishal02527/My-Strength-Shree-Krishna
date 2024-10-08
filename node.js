const express = require('express');
const mysql = require('mysql');
const cron = require('node-cron');
const Handlebars = require('handlebars');

const app = express();

// Connect to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'Saanya Garg',
    password: 'saanya1234',
    database: 'messages_db'
});

// Create a function to select a message
function selectMessage() {
    // Get the current date and time
    const currentDate = new Date();
    
    // Query to select a message based on the current date and time
    const query = "SELECT * FROM messages WHERE display_date <= ?";
    db.query(query, currentDate, (err, results) => {
        if (err) {
            console.error(err);
        } else {
            const message = results[0];
            displayMessage(message);
        }
    });
}

// Define a function to display the message on the homepage
function displayMessage(message) {
    // Render the message on the homepage using a templating engine
    const template = Handlebars.compile("{{ message.text }}");
    const renderedMessage = template({ message });
    console.log(renderedMessage);
    
    // Send the rendered message to the client
    app.get('/', (req, res) => {
        res.send(renderedMessage);
    });
}

// Schedule the script to run daily
cron.schedule('0 0 * * *', () => {  // Run at midnight
    selectMessage();
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});