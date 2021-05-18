DROP DATABASE IF EXISTS employee_listDB;

CREATE DATABASE employee_listDB;

USE employee_listDB;

-- Creat employee table
CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);

--create role table
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
    PRIMARY KEY (id)
);

--create department table
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) 
);

INSERT INTO employee(first_name, last_name, role_id)
VALUES ("Eden", "Hebert", 4)
       ("Damien", "Harrington", 1)
       ("Norah", "Duke", 2)
       ("Jon", "Cantrell", 2)
       ("Bradley", "Klyczek", 1)
       ("Joel", "Conrad", 4)
       ("Allison", "Vance", 5)
       ("Neveah", "Mitchell", 3)

INSERT INTO department(name)
VALUES ("Accounting")
       ("Maintenance")
       ("Store")
       ("Upper Management")

INSERT INTO role (title, salary, department_id)
VALUES ("Retail Accounting", 75000, 1,)
       ("General Manager", 90000, 4,)
       ("Retail Associate", 50000, 3,)
       ("IT", 80000, 2,)
       ("Store Manager", 60000, 3,)

SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;