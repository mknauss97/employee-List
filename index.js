const mysql = require('mysql');
const inquirer  = require('inquirer');
const util = require("util");




const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employee_listDB',
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    connection.end();
});

const startApp = () => {

    inquirer.prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
            'View all employees',
            'View all employees by role',
            'View all employees by department',
            'Update employee',
            'Add a new employee',
            'Add a new role',
            'Add a new department',
            'Exit'
        ],
    })
        .then((answer) => {
            switch (answer.action) {
                case 'View all employees':
                    employeeSearch();
                    break;

                case 'View all employees by role':
                    employeeRoleSearch();
                    break;

                case 'View all employees by department':
                    employeeDepartmentSearch();
                    break;

                case 'Update employee':
                    employeeUpdate(); 
                    break;

                case 'Add a new employee':
                    addEmployee();
                    break;

                case 'Add a new role':
                    addRole();
                    break;

                case 'Add a new department':
                    addDepartment();
                    break;

                default:
                    console.log('invalid action: ${answer.action}');
                    break;

            }
        })
};

const employeeSearch = () => {
    connection.query() = 'SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name AS department ';
    query +=
        'FROM employee LEFT JOIN role ON (employee.role_id = role.id) '
    query +=
        'LEFT JOIN department ON (department.id = role.department_id)'
    const result = connection.query(res)
    console.table(result)
    startApp()
}

const employeeRoleSearch = () => {
    let query = 
    'SELECT * FROM role';
    const roleData = connection.query(query);
    console.table(roleData);
    promptUser();
}