CREATE DATABASE manager;

CREATE TABLE employee (
    employee_id SERIAL PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(255) UNIQUE,
    department_id SERIAL REFERENCES department(department_id)
)

CREATE TABLE department (
    department_id SERIAL PRIMARY KEY,
    department_name VARCHAR(255) UNIQUE NOT NULL
)

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    avatar TEXT
)

CREATE TABLE supervisor (
    supervisor_id SERIAL PRIMARY KEY,
    supervisor_name VARCHAR(255),
    employee_id SERIAL REFERENCES employee(employee_id)
)