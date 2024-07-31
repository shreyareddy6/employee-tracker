// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: [
      {
        name: "View All Employess",
        value: "view_all_employees",
      },
      {
        name: "View All Departments",
        value: "view_all_departments",
      },
      {
        name: "View All Roles",
        value: "view_all_roles",
      },
      {
        name: "Add an Employee",
        value: "add_employee",
      },
      {
        name: "Add a Department",
        value: "add_department",
      },
      {
        name: "Add a Role",
        value: "add_role",
      },
      {
        name: "Update an Employee",
        value: "update_employee",
      },
    ],
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const userChoice = answers.choice;

    switch (userChoice) {
      case "view_all_employees":
        viewEmployees();
        break;
      case "view_all_departments":
        viewDepartments();
        break;
      case "view_all_roles":
        viewRoles();
        break;
      case "add_employee":
        addEmployee();
        break;
      case "add_department":
        addDepartment();
        break;
      case "add_role":
        addRole();
        break;
      case "update_employee":
        updateEmployee();
        break;
      default:
        break;
    }
  });
}

// Function call to initialize app
init();
