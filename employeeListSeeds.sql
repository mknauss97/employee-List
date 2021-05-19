DROP DATABASE IF EXISTS employee_listDB;

CREATE DATABASE employee_listDB;

USE employee_listDB;


CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30), 
    PRIMARY KEY (id)
);


CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);


CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);





INSERT INTO department(name)
VALUE ("Accounting");
INSERT INTO department(name)
VALUE ("Maintenance");
INSERT INTO department(name)
VALUE ("Store");
INSERT INTO department(name)
VALUE ("Upper Management");




INSERT INTO role (title, salary, department_id)
VALUE ("Retail Accounting", 75000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("General Manager", 90000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Retail Associate", 50000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("IT", 80000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Store Manager", 60000, 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Eden", "Hebert", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Damien", "Harrington", 1, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Norah", "Duke", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Jon", "Cantrell", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Bradley", "Klyczek", 1, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Joel", "Conrad", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Allison", "Vance", 5, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Neveah", "Mitchell", 3, 4);

SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;