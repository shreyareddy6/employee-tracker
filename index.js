// Include packages needed for this application
const inquirer = require("inquirer");

const EmployeeTracker = require("./db/index");

const tracker = new EmployeeTracker();

// Create an array of questions for user input
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
      {
        name: "Exit",
        value: "Exit",
      },
    ],
  },
];

// TODO: Create a function to initialize app
async function init() {
  const answers = await inquirer.prompt(questions);

  switch (answers.choice) {
    case "view_all_employees":
      const employees = await tracker.viewAllEmployees();
      console.table(employees);
      break;

    case "view_all_departments":
      const departments = await tracker.viewAllDepartments();
      console.table(departments);
      break;

    case "view_all_roles":
      const roles = await tracker.viewAllRoles();
      console.table(roles);
      break;

    case "add_employee":
      const empAnswers = await inquirer.prompt([
        {
          type: "input",
          name: "first_name",
          message: "Enter the first name of the employee:",
        },
        {
          type: "input",
          name: "last_name",
          message: "Enter the last name of the employee:",
        },
        {
          type: "input",
          name: "role_id",
          message: "Enter the role ID for the employee:",
        },
        {
          type: "input",
          name: "manager_id",
          message:
            "Enter the manager ID for the employee (leave blank if none):",
          default: null,
          filter: (input) => (input === "" ? null : input), // Convert empty input to null
        },
      ]);
      const newEmployee = await tracker.addEmployee(
        empAnswers.first_name,
        empAnswers.last_name,
        empAnswers.role_id,
        empAnswers.manager_id
      );
      console.log("Employee added:", newEmployee);
      break;

    case "add_department":
      const deptAnswers = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "Enter the name of the department:",
        },
      ]);
      const newDept = await tracker.addDepartment(deptAnswers.name);
      console.log("Department added:", newDept);
      break;

    case "add_role":
      const roleAnswers = await inquirer.prompt([
        {
          type: "input",
          name: "title",
          message: "Enter the title of the role:",
        },
        {
          type: "input",
          name: "salary",
          message: "Enter the salary for the role:",
        },
        {
          type: "input",
          name: "department_id",
          message: "Enter the department ID for the role:",
        },
      ]);
      const newRole = await tracker.addRole(
        roleAnswers.title,
        roleAnswers.salary,
        roleAnswers.department_id
      );
      console.log("Role added:", newRole);
      break;

    case "update_employee":
      const updateAnswers = await inquirer.prompt([
        {
          type: "input",
          name: "employee_id",
          message: "Enter the ID of the employee to update:",
        },
        {
          type: "input",
          name: "role_id",
          message: "Enter the new role ID for the employee:",
        },
      ]);
      const updatedEmployee = await tracker.updateEmployeeRole(
        updateAnswers.employee_id,
        updateAnswers.role_id
      );
      console.log("Employee role updated:", updatedEmployee);
      break;

    case "Exit":
      console.log("Goodbye!");
      process.exit();
  }
  init();
}

// Function call to initialize app
init();
