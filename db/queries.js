//db.query(`SELECT ${select} FROM ${from} WHERE ${where}`, function (err, results)

console.log("All departments");
db.query(`SELECT * FROM departments`, function (err, results){
    console.log(results);
});

console.log("All roles");
db.query(`SELECT * FROM roles`, function (err, results){
    console.log(results);
});

console.log("All employees");
db.query(`SELECT * FROM employees`, function (err, results){
    console.log(results);
});

console.log("Add a department");
db.query(`INSERT INTO departments (id, name) VALUES (?, ?)`, [id, name], function (err, results){
    console.log(results);
});

console.log("Add a role");
db.query(`INSERT INTO roles (id, title, salary, department_id) VALUES (?, ?, ?, ?)`, [id, title, salary, department_id], function (err, results){
    console.log(results);
});

console.log("Add an employee");
db.query(`INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?, ?)`, [id, first_name, last_name, role_id, manager_id], function (err, results){
    console.log(results);
});

console.log("Update an employee role");
db.query(`UPDATE employees SET role_id=? WHERE id = ?`, [role_id, id], function (err, results){
    console.log(results);
});

console.log("Update an employee manager");
db.query(`UPDATE employees SET manager_id=? WHERE id = ?`, [manager_id, id], function (err, results){
    console.log(results);
});

console.log("All employees");
db.query(`SELECT * FROM employees ORDER BY manager_id`, function (err, results){
    console.log(results);
});

console.log("All employees");
db.query(`SELECT department.name, employees.first_name, employees.last_name  
            FROM employees 
            JOIN roles ON employees.role_id = roles.department_id
            JOIN departments ON roles.department_id = departments.id
            ORDER BY department.name`, function (err, results){
    console.log(results);
});