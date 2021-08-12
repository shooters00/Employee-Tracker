class DepartmentQuery {
    constructor (select, from, where) {
        
        this.select = select;
        this.from = from;
        this.where = where;
    }

    executeQuery() {
        if (where) {
            db.query(`SELECT ${select} FROM ${from} WHERE ${where}`, function (err, results) {
                console.log(results);
              });
        } else {
            db.query(`SELECT ${select} FROM ${from}`, function (err, results) {
                console.log(results);
            });
        }
    }
}


module.exports = DepartmentQuery;