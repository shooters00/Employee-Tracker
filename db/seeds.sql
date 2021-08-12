USE employees_db;
INSERT INTO departments (name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Operations"),
        ("Development"),
        ("Legal"),
        ("Site Support"),
        ("Remote Support");
       
INSERT INTO roles (title, salary, department_id)
VALUES  ("Salesperson", 85000, 1),
        ("Systems Engineer", 175000, 2),
        ("Financial Analyst", 125000, 3),
        ("Operations Assistant", 60000, 4),
        ("Senior Operations Technician", 115000, 4),
        ("Level 1 Developer", 125000, 5),
        ("Level 3 Developer", 185000, 5),
        ("Legal Counsel", 200000, 6),
        ("Site Support", 80000, 7),
        ("Remote Support", 75000, 7),
        ("Sales Manager", 165000, 1),
        ("Engineering Manager", 200000, 2),
        ("Finance Manager", 150000, 3),
        ("Operations Manager", 150000, 4),
        ("Development Manager", 210000, 5),
        ("Legal Advisor/Manager", 235000, 6),
        ("Support Manager", 150000, 7),
        ("Specialist", 500000, 4);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Michael", "Scott", 11, NULL),
        ("Billy", "Madison", 12, NULL),
        ("James", "Kirk", 13, NULL),
        ("Kirk", "Lazarus", 14, NULL),
        ("Cable", "Guy", 15, NULL),
        ("Judge", "Smails", 16, NULL),
        ("Derek", "Zoolander", 17, NULL),
        ("Lloyd", "Christmas", 1, 1),
        ("Lord", "Helmet", 10, 7),
        ("Judge", "Judy", 9, 6),
        ("Homer", "Simpson", 4, 4),
        ("Ricky", "Bobby", 18, 4),
        ("Ray", "Finkel", 18, 4),
        ("Eric", "Cartman", 8, 6),
        ("Inspector", "Clouseau", 5, 4),
        ("Marty", "McFly", 3, 3),
        ("Erlich", "Bachman", 6, 5),
        ("Richard", "Hendricks", 7, 5),
        ("Hannibal ", "Lecter", 2, 2);
       