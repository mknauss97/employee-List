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

SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;