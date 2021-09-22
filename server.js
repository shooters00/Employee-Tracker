//Import needed components
const inquirer = require('inquirer');
const mysql = require('mysql2');
//const express = require('express');
const path = require('path');
const consoleTable = require('console.table');
const { clog } = require('./middleware/clog');

const {Department, Role, Employee} = require('./lib/models/');
const DepartmentQuery = require('./db/DepartmentQuery');
const db = require('./db/sqlLogin');
const questions = require('./lib/questions');
const {switchMe, choice} = require('./lib/switchMe');
const { TIMEOUT } = require('dns');
//const {Department, vieAllDepartments} = require('./lib/Department');

//const PORT = process.env.PORT || 3001;
//const app = express();

// Import custom middleware, "cLog"
//app.use(clog);

// Express middleware
//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

//app.use(express.static('public'));

//Login to database
db;

const start = () => {
  
  inquirer
  .prompt(questions)
  .then((data) => {
    switchMe(data, start, theEnd);
  })
  .catch((err) => console.log(err));
}

const theEnd = () => {
  console.log("\n");
  console.log("Thanks for using this Employee Tracker.");
  console.log("\n");
  process.exit();
}

console.log("Starting...");
start();