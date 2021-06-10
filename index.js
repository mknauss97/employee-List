const mysql = require('mysql');
const inquirer  = require('inquirer');
const consoleTable = require("console.table");




const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employee_listDB',
});

connection.connect((err) => {
    if (err) throw err;
    startApp();
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
    let data = "SELECT * FROM employee LEFT JOIN role ON role_id = role.id;";
    connection.query(data, (err, res) => {
        if (err)  throw err;
        console.table("All Employees:", res);
        startApp();
    });
};

const employeeRoleSearch = () => {
   let data = "SELECT * FROM role LEFT JOIN employee ON role.id = role_id;";
   connection.query(data, (err, res) => {
       if (err) throw err;
       console.table("All ROles:", res);
       startApp();
   });
};

const employeeDepartmentSearch = () => {
    let data = "SELECT * FROM department LEFT JOIN role ON department_id = department.id LEFT JOIN employee ON role_id = role.id;";
    connection.query(data, (err, res) => {
        if (err) throw err;
        console.table("All Departments:", res);
        startApp();
    });
};

const employeeUpdate = () => {
    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "Please enter employee's ID number",
        }
    ])
    .then((answer) => {
        const ID = answer.id
        inquirer.prompt([
            {
                name: "roleId",
                type: "input",
                message: "Please enter the role ID",
            }
        ])
        .then((answer) => {
            const employeeRoleId = answer.roleId
            let data = "UPDATE employee SET role_id=? WHERE id=?"
            connection.query(data, [employeeRoleId, ID], (err, res) => {
                if (err) throw err;
                console.table(res);
                startApp();
            });
        });
    });
}

const addEmployee = () => {
    inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "What is the new employee's first name?"
        },
        {
            name: "lastName",
            type: "input",
            message: "What is their last name?"
        },
        {
        name: "roleID",
        type: "input",
        message: "What is their role ID number?"
        },
        {
            name: "managerID",
            type: "input",
            message: "what is their manager's ID number"
        }
    ])
    .then((answer) => {
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.firstName, answer.lastName, answer.roleID, answer.managerID], (err,res) => {
            if (err) throw err;
            console.table(res);
            startApp();
        });
    });
}

const addRole = () => {
    inquirer.prompt([
        {
            name:"newRole",
            type: "input",
            message: "What is the new role's name?"
        },
        {
            name: "salary",
            type: "input",
            message: "What is the annual salary?"
        },
        {
            name: "departmentID",
            type: "input",
            message: "What is the department ID?"
        }
    ])
    .then((answer) => {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.newRole, answer.salary, answer.departmentID], (err, res) => {
            if (err) throw err;
            console.table(res);
            startApp();
        });
    });
}

const addDepartment = () => {
    inquirer.prompt([
        {
            name: "newDepartment",
            type: "input",
            message: "What is the new department's name?"
        }
    ])
    .then((answer) => {
        connection.query("INSERT INTO department (name) VALUES (?)", [answer.newDepartment], (err,res) => {
            if (err) throw err;
            console.table(res);
            startApp();
        });
    });
}