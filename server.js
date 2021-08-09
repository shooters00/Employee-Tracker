//Import needed components
const inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');
const path = require('path');
const path = require('console.table');
const { clog } = require('./middleware/clog');

const PORT = process.env.PORT || 3001;
const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'root',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

/* Use this in inquirer
// Query database
db.query('SELECT * FROM students', function (err, results) {
    console.log(results);
  });

*/

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });