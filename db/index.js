const pool = require("./connection");

class EmployeeTracker {
  constructor() {}
  // Method to view all Departments
  async viewAllDepartments() {
    const result = await pool.query("SELECT * FROM department");
    return result.rows;
  }
  // Method to view all Roles
  async viewAllRoles() {
    const result = await pool.query("SELECT * FROM role");
    return result.rows;
  }
  // Method to view all Employees
  async viewAllEmployees() {
    const result = await pool.query("SELECT * FROM employee");
    return result.rows;
  }
  // Method to add a department
  async addDepartment(name) {
    const result = await pool.query(
      "INSERT INTO department (name) VALUES ($1) RETURNING *",
      [name]
    );
    return result.rows[0];
  }

  // Method to add a role
  async addRole(title, salary, department_id) {
    const result = await pool.query(
      "INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *",
      [title, salary, department_id]
    );
    return result.rows[0];
  }

  // Method to add an employee
  async addEmployee(first_name, last_name, role_id, manager_id) {
    const result = await pool.query(
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [first_name, last_name, role_id, manager_id]
    );
    return result.rows[0];
  }

  // Method to update an employee role
  async updateEmployeeRole(employee_id, role_id) {
    const result = await pool.query(
      "UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *",
      [role_id, employee_id]
    );
    return result.rows[0];
  }
}

module.exports = EmployeeTracker;
