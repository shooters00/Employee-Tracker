USE employees_db;
INSERT INTO department (id, name)
VALUES  (001,   "Sales"),
        (002,   "Engineering"),
        (003,   "Finance"),
        (004,	"Operations"),
        (005,	"Development"),
        (006,	"Legal"),
        (007,	"Site Support"),
        (008,	"Remote Support");
       
INSERT INTO role (id, title, salary, department_id)
VALUES  (101,	"Junior Salesperson", 85000, 001),
        (102,	"Mid-level Salesperson", 100000, 001),
        (103,	"Senior Salesperson", 125000, 001),
        (104,	"Level 1 SE", 125000, 002),
        (105,	"Level 2 SE", 140000, 002),
        (106,	"Level 3 SE", 175000, 002),
        (107,	"Associate Financial Analyst", 75000, 003),
        (108,	"Financial Analyst Staff", 95000, 003),
        (109,	"Financial Analyst Senior Staff", 125000, 003),
        (110,	"Operations Assistant", 85000, 004),
        (111,	"Operations Technician", 100000, 004),
        (112,	"Senior Operations Technician", 125000, 004),
        (113,	"Level 1 Developer", 125000, 005),
        (114,	"Level 2 Developer", 140000, 005),
        (115,	"Level 3 Developer", 175000, 005),
        (116,	"Legal Counsel", 165000, 006),
        (117,	"Senior Legal Counsel", 190000, 006),
        (118,	"Level 1 Site Support", 80000, 007),
        (119,	"Level 2 Site Support", 100000, 007),
        (120,	"Level 3 Site Support", 130000, 007),
        (121,	"Level 1 Remote Support", 75000, 008),
        (122,	"Level 2 Remote Support", 95000, 008),
        (123,	"Level 3 Remote Support", 125000, 008),
        (124,   "Sales Manager", 165000, 001),
        (125,   "Engineering Manager", 200000, 002),
        (126,   "Finance Manager", 150000, 003),
        (127,   "Operations Manager", 150000, 004),
        (128,   "Development Manager", 210000, 005),
        (129,   "Legal Advisor/Manager", 235000, 006),
        (130,   "Site Manager", 150000, 007),
        (131,   "Remote Staff Manager", 150000, 008),
        (132,   "Specialist", 500000, 004);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (231,	"James", "Marlow", 125, NULL),
        (232,	"TJ", "Olson", 126, NULL),
        (255,	"Oliver", "Tuvault", 127, NULL),
        (273,	"Sundita", "Kumar", 128, NULL),
        (291,	"Randall", "Perkins", 129, NULL),
        (303,	"Susan", "Mavris", 130, NULL),
        (315,	"Happy", "Gilmore", 131, NULL),
        (350,	"Michael", "Scott", 124, NULL),
        (201,	"Neena", "Kochhar", 101, 350),
        (202,	"Lex", "De Haan", 102, 350),
        (204,	"Bruce", "Ernst", 103, 350),
        (207,	"Diana", "Lorentz", 104, 231),
        (213,	"Luis", "Popp", 105, 231),
        (219,	"Karen", "Colmenares", 106, 231),
        (223,	"Shanta", "Vollman", 102, 350),
        (240,	"Joshua", "Patel", 107, 232),
        (244,	"Peter", "Vargas", 108, 232),
        (250,	"Peter", "Tucker", 109, 232),
        (256,	"Janette", "King", 110, 255),
        (261,	"Sarath", "Sewall", 111, 255),
        (269,	"Harrison", "Bloom", 112, 255),
        (278,	"Kimberely", "Grant", 113, 273),
        (282,	"Martha", "Sullivan", 114, 273),
        (284,	"Nandita", "Sarchand", 115, 273),
        (300,	"Jennifer", "Whalen", 116, 291),
        (302,	"Pat", "Fay", 117, 291),
        (304,	"Hermann", "Baer", 118, 303),
        (306,	"William", "Gietz", 119, 303),
        (313,	"Billy", "Madison", 120, 303),
        (319,	"James", "Kirk", 121, 315),
        (322,	"Homer", "Simpson", 122, 315),
        (325,	"Cable", "Guy", 123, 315),
        (330,	"Derek", "Zoolander", 106, 231),
        (333,	"Lloyd", "Christmas", 109, 232),
        (335,	"Lord", "Helmet", 112, 255),
        (339,	"Judge", "Smails", 101, 350),
        (341,	"Kirk", "Lazarus", 114, 273),
        (344,	"Ricky", "Bobby", 118, 303),
        (348,	"Ray", "Finkel", 132, 255),
        (351,	"Eric", "Cartman", 110, 255);
       