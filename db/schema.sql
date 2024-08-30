-- Create db for employees tracker
DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

\c employee_tracker;

-- Create table for department details
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(225) NOT NULL
);

-- Create table for role details
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(225) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

-- Create table for employee details
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(225) NOT NULL,
    last_name VARCHAR(225) NOT NULL,
    role_id INTEGER,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL,
    manager_id INTEGER,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
);