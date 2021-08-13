const mysql = require('mysql2');
const db = require('../db/sqlLogin');
const inquirer = require('inquirer');
let depNames;
let choice;

const switchMe = ({choice}, start, theEnd) => {
    let createNew;
    switch(choice) {

        case '01. View all departments':
            viewAllDepartments().then(() => start())
            //start();
            break;

        case '02. View all roles':
            viewAllRoles().then(() => start())
            break;

        case '03. View all employees':
            viewAllEmployees().then(() => start())
            break;

        case '04. Add a department':
            getDepartmentName().then(() => start());
            break;

        case '05. Add a role':
            //departmentList();
            getRole();
            break;

        case '06. Add an employee':
            getEmployee();
            break;

        case 'Quit':
            return(choice);
    }
  }

//View Departments

const viewAllDepartments = () => {
    //Query database
    return new Promise((resolve,reject) => {
        db.promise().query(`SELECT * FROM departments`) 
        .then((rows) => {
            console.log("\n");
            //console.table(rows[0]);
            console.table(rows[0]);
            resolve();
        })
    })
    .catch((err) => console.log(err));

}

const departmentNames = async () => {
    return db.promise().query(`SELECT name FROM departments`)
}

//View Roles

const viewAllRoles = () => {
    return new Promise((resolve, reject) => {
        db.promise().query(`SELECT * FROM roles`) 
        .then((rows) => {
        console.log("\n");
        console.table(rows[0]);
        resolve();
        })
    })
        .catch((err) => console.log(err));
}


//View Employees

const viewAllEmployees = () => {
    return new Promise((resolve, reject) => {
        db.promise().query(`SELECT * FROM employees`) 
        .then((rows) => {
        console.log("\n");
        console.table(rows[0]);
        resolve();
        })
    })
    .catch((err) => console.log(err));
}

 //Add a Department

const departmentQuest = [
    {
        type: 'input',
        name: 'department',
        message: 'Enter name of department?',
    }
]

const getDepartmentName = () => {
    return new Promise((resolve, reject) => {
        inquirer
        .prompt(departmentQuest)
        .then((answer) => {
            db.promise().query(`INSERT INTO departments (name) VALUES (?)`, answer.department) 
        }).then(() => {
            console.log("\n");
            console.log("Department added.");
            console.log("\n");
            resolve();
        })
    })
        .catch((err) => console.log(err));
}

 //Add a Role



const getRole = async () => {
    const depNames = await departmentNames();

    const roleQuest = [
        {
            type: 'input',
            name: 'role',
            message: 'Enter name of role?',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter salary of role?',
        },
        {
            type: 'list',
            name: 'department',
            message: 'Enter department of role?',
            choices: depNames[0]
        }
    ]

    inquirer
    .prompt(roleQuest)
    .then((answer) => {
        db.promise().query(`INSERT INTO departments (title, salary, department_id) VALUES (?)`, [answer.role, answer.salary, answer.department]) 
    }).then(() => {
        console.log("\n");
        console.log("Role added.");
    })
    .catch((err) => console.log(err));
    }


    //Add an Employee

    const employeeQuest = [
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter first name of employee?',
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter last name of employee?',
        },
        {
            type: 'list',
            name: 'role',
            message: 'Enter role of employee?',
            choices: []
        },
        {
            type: 'list',
            name: 'manager',
            message: 'Enter manager of employee?',
            choices: []
        }
    ]

  module.exports = {switchMe, choice};