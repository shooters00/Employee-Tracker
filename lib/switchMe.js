const mysql = require('mysql2');
const db = require('../db/sqlLogin');
const inquirer = require('inquirer');
let depNames;
let choice;

const switchMe = ({choice}) => {
    let createNew;
    switch(choice) {

        case '01. View all departments':
            viewAllDepartments();
            break;

        case '02. View all roles':
            viewAllRoles();
            break;

        case '03. View all employees':
            viewAllEmployees();
            break;

        case '04. Add a department':
            getDepartmentName();
            break;

        case '05. Add a role':
            //departmentList();
            departmentNames();
            getRole(depNames);
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
    console.log("All departments");
    departmentList();
}

const departmentList = () => {
    db.promise().query(`SELECT * FROM departments`) 
        .then((rows) => {
        console.log("\n");
        //console.table(rows[0]);
        console.table(rows[0]);
    })
    .catch((err) => console.log(err));
}

const departmentNames = () => {
    db.promise().query(`SELECT name FROM departments`) 
        .then((rows) => {
        depNames = console.table(rows[0]);
        return depNames;
    })
    .catch((err) => console.log(err));
}

//View Roles

const viewAllRoles = () => {
    console.log("All roles");
    roleList();
}

const roleList = () => {
    db.promise().query(`SELECT * FROM roles`) 
    .then((rows) => {
    console.log("\n");
    console.table(rows[0]);
    })
    .catch((err) => console.log(err));
}

//View Employees

const viewAllEmployees = () => {
    console.log("All employees");
    employeeList();
}

const employeeList = () => {
    db.promise().query(`SELECT * FROM employees`) 
    .then((rows) => {
    console.log("\n");
    console.table(rows[0]);
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
inquirer
.prompt(departmentQuest)
.then((answer) => {
    db.promise().query(`INSERT INTO departments (name) VALUES (?)`, answer.department) 
}).then(() => {
    console.log("\n");
    console.log("Department added.");
})
.catch((err) => console.log(err));
}

 //Add a Role

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
        choices: [{depNames}]
    }
]

const getRole = () => {
    inquirer
    .prompt(roleQuest)
    .then((answer) => {
        db.promise().query(`INSERT INTO departments (title, salary, department_id) VALUES (?)`, [answer.role, answer.salary, answer.department]) 
    }).then(() => {
        console.log("\n");
        console.log("Department added.");
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