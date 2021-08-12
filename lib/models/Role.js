class Role {
    constructor (id, title, salary, department_id) {
        
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.department_id = department_id;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getSalary() {
        return this.salary;
    }

    getDepartmentID() {
        return this.department_id;
    }

    viewAllRoles() {
        db.query('SELECT * FROM role', function (err, results) {
            console.log(results);
          });
    }
}


module.exports = Role;