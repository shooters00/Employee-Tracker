const questions = 
    [
        {
            type: 'list',
            name: 'choice',
            message: 'What do you want to do?',
            choices: ['Quit', '01. View all departments', '02. View all roles', '03. View all employees', 
                        '04. Add a department', '05. Add a role', '06. Add an employee', 
                        '07. Update an employee role', '08. Update employee manager', 
                        '09. View employees by manager', '10. View employees by department', 
                        '11. Delete departments, roles, and employees', '12. View budget for a department']
        }
    ]

module.exports = questions;