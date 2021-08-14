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
            getRole().then(() => start());
            break;

        case '06. Add an employee':
            getEmployee().then(() => start());;
            break;

        case 'Quit':
            theEnd();
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

//const departmentNames = async () => {
//    return db.promise().query(`SELECT name FROM departments`)
//}


const getTheID = async (answer) => {
    const depID = await db.promise().query(`SELECT id FROM departments WHERE name=?`, answer.department_id);
    return depID[0][0].id;
}

const getRole = async () => {
    
    return new Promise(async (resolve, reject) => {
        const depNames = await db.promise().query(`SELECT name FROM departments`);

        const roleQuest = [
            {
                type: 'input',
                name: 'title',
                message: 'Enter name of role?',
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter salary of role?',
            },
            {
                type: 'list',
                name: 'department_id',
                message: 'Enter department of the role?',
                choices: depNames[0]
            }
        ]

        inquirer
        .prompt(roleQuest)
        .then(async (answer) => {
            const depID = await getTheID(answer);
            return db.promise().query(`INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`, [answer.title, answer.salary, depID]) 
        }).then(() => {
            console.log("\n");
            console.log("Role added.");
            console.log("\n");
            resolve();
        })
    })
        .catch((err) => console.log(err));
}


    //Add an Employee

    const getTheRole = async (answer) => {
        const roleID = await db.promise().query(`SELECT id FROM roles WHERE title=?`, answer.role);
        return roleID[0][0].id;
    }

    const getTheManager = async (answer) => {
        const managerID = await db.promise().query(`SELECT id FROM employees WHERE first_name = ?`, answer.manager);
        return managerID[0][0].id;
    }
    
    const getEmployee = async () => {
        
        return new Promise(async (resolve, reject) => {
            const roleNames = await db.promise().query(`SELECT id, title FROM roles`);
            const formattedRoleNames = roleNames[0].map((item) => {
                return {
                    name: item.title,
                    value: item.id
                }
            })
            const managerNames = await db.promise().query(`SELECT id, first_name, last_name FROM employees`);

            const formattedManagerNames = managerNames[0].map((item) => {
                return {
                    name: item.first_name + " " + item.last_name, 
                    value: item.id
                }
            })
    
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
                    choices: formattedRoleNames
                },
                {
                    type: 'list',
                    name: 'manager',
                    message: 'Enter manager of employee?',
                    choices: formattedManagerNames
                }
            ]
    
            inquirer
            .prompt(employeeQuest)
            .then(async ({first_name, last_name, role, manager}) => {
                //const roleID = await getTheRole(answer);
                //const managerID = await getTheManager(answer);
                return db.promise().query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [first_name, last_name, role, manager]) 
            }).then(() => {
                console.log("\n");
                console.log("Role added.");
                console.log("\n");
                resolve();
            })
        })
            .catch((err) => console.log(err));
    }

  module.exports = {switchMe, choice};