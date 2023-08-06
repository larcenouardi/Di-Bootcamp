--1 Write a query to find the first_name, last_name and salaries of the employees who have a higher salary
-- than the employee whose last_name is Bell.

select first_name, last_name, salary from employees
Where salary > (select salary from employees where last_name = 'Bell')
order by salary;

--2 Write a SQL subquery to find the first_name and last_name of the employees under a manager who works 
-- for a department based in the United States.
-- Hint : Write single-row and multiple-row subqueries

select employees.first_name, employees.last_name, country_id, manager_id from employees
INNER JOIN departments
ON employees.department_id = departments.department_id
INNER JOIN locations
ON departments.location_id = locations.location_id
where manager_id is not null AND country_id = 'US'

-- 3 Write a SQL subquery to find the first_name and last_name of the employees who are working as managers.


select first_name, last_name from employees where employee_id IN (select distinct manager_id from employees);


-- 4 Write a SQL subquery to find the employee(s) first_name and last_name,
-- which salary is greater than the average salary of the employees.

select first_name, last_name, salary from employees where salary > (select avg(salary) from employees)
order by salary;


-- 5 Write a SQL subquery to find the employee(s) first_name and last_name,
-- which salary is equal to the minimum salary of their job position.

select first_name, last_name, salary, min_salary  from employees
INNER JOIN jobs
ON employees.job_id = jobs.job_id
where salary = min_salary


--6 Write a query to find the names (first_name, last_name) of the employees who are not supervisors.

select employee_id from employees where employee_id NOT IN (select manager_id from employees)


--7 Write a SQL subquery to find the employee(s) ID, first name, last name and salary of all
-- employees whose salary is above the average salary for their departments.


select employees.employee_id, employees.first_name, employees.last_name, salary, employees.department_id from employees
INNER JOIN departments
ON employees.department_id = departments.department_id
where salary > (select avg(salary) from employees where department_id = employees.department_id)


--8 Write a subquery to find the 5th maximum salary of all salaries.

select first_name, last_name, salary fifthsalary from employees order by salary desc offset 4 limit 1

-- 9 Write a subquery to find the 4th minimum salary of all the salaries.

select first_name, last_name, salary forthsalary from employees order by salary offset 3 limit 1

-- 10 Write a query to list the department name and number, 
-- of all the departments in which there are no employees.

select employees.first_name, departments.department_name, departments.department_id from departments
LEFT OUTER JOIN employees
ON departments.department_id = employees.department_id
where employees.department_id not in (select distinct employees.department_id from employees);



-- JOINS


--1 Write a query to find the addresses (location_id, street_address, city, state_province, country_name)
-- of all the departments.

select departments.department_name, locations.location_id, locations.street_address, locations.city, locations.state_province, countries.country_name
from departments
INNER JOIN locations
on departments.location_id = locations.location_id
INNER JOIN countries
ON locations.country_id = countries.country_id


-- 2 Write a query to make a join with the employees and departments table to find the name of the employee, 
-- including first_name and last name, department ID and name of departments.

select employees.first_name, employees.last_name, departments.department_id, departments.department_name
from employees
INNER JOIN departments
ON employees.department_id = departments.department_id
order by employees.first_name


-- 3 Write a SQL query to make a join with three tables: employees, departments and locations to 
-- find the name, including first_name and last_name, jobs, department name and ID, 
-- of the employees working in London.

select locations.city, employees.first_name, employees.last_name, jobs.job_title, departments.department_name, departments.department_id
from employees
INNER JOIN departments
on employees.department_id = departments.department_id
INNER JOIN locations
on departments.location_id = locations.location_id
INNER JOIN jobs
on employees.job_id = jobs.job_id
WHERE locations.city = 'London'



-- 4 Write a query to make a join with two tables to find the employee id,
-- last_name as Employee along with their manager_id
-- and last name as Manager.


SELECT A.employee_id, B.last_name as EMPLOYEE , a.last_name as MANAGER
FROM employees A, employees B
WHERE A.employee_id = B.manager_id


-- 5 Write a query to make a join with two tables employees and departments, 
-- to get the employees working in each department 
-- (retrieve the employees details, and the department name and number).

select employees.first_name, employees.last_name, employees.email, departments.department_id, departments.department_name
From employees
INNER JOIN departments
ON employees.department_id = departments.department_id
order by department_id asc



--6 Write a query to make a join to find the employees who worked in a department which ID is 90 
-- (retrieve the employee ID, job title and number of days the employee worked).

-- number of days was not able to use datediff function at all. 

select employees.hire_date, employees.first_name, employees.last_name,
employees.employee_id, jobs.job_title, departments.department_name
From employees
INNER JOIN departments
ON employees.department_id = departments.department_id
INNER JOIN jobs
ON jobs.job_id = employees.job_id
where employees.department_id = 9




--7 Write a query to make a join with three tables, departments, employees, and locations 
-- to display the department name, manager name, and city.


select departments.department_name, locations.city, employees.manager_id
from employees
INNER JOIN departments
on employees.department_id = departments.department_id
INNER JOIN locations
on departments.location_id = locations.location_id



--8 Write a query to make a join with two tables, employees and jobs to display 
-- the job title and average salary of the employees.


select job_title, ROUND(avg(salary),2) from employees
INNER JOIN jobs
ON employees.job_id = jobs.job_id
group by job_title



--9 Write a query to make a join with two tables, employees and departments to display department name,
-- first_name and last_name, hire date and salary for all the managers
-- who achieved a working experience of more than 15 years.


select departments.department_name, employees.first_name, employees.last_name, employees.hire_date, employees.salary
from employees
INNER JOIN departments
ON employees.department_id = departments.department_id
where employee_id in (select distinct manager_id from employees) AND hire_date < '2008-01-01';



-- string exercises




--1 Write a query to update phone_number records.
-- If the the substring ‘124’ was found in that column, update the phone_number to ‘999’.

UPDATE employees
SET phone_number = 999
WHERE phone_number LIKE '%124%';


--2 Write a query to find the details of the employees who contain eight or more characters in their first name.

select * from employees where LENgth(first_name) > 7;


--3 Write a query to join in uppercase, the first letter of the first_name, with the last_name,
-- with '@example.com‘ in the email column.

SELECT SUBSTRING(first_name, 1, 1) || UPPER(last_name) || '@example' from employees;


--4 Write a query to get the employee id, email but discard the last three characters of the email.


select employee_id, SUBSTRING(email, 1, (LENGTH(email)-3)) from employees



--5 Write a query to display the first word in the job title,
-- if the job title contains more than one words.


select SUBSTRING(job_title, 1, (POSITION(' ' in job_title))) from jobs
where job_title like '% %';



--6 Write a query that displays the first name and the length of the first name for all
-- employees whose name starts with the letters ‘A’, ‘J’ or ‘M’.
-- Give each column an appropriate label. Sort the results by the employees’ first names.

select first_name, LENGTH(first_name) lenght_first_name from employees
where first_name like 'A%' OR
first_name like 'J%' or
first_name like 'M%'
order by first_name;




--7 Write a query to display the first name and salary for all employees.
-- Display the salary with the $ symbol. Label the column as SALARY.

select first_name, '$' || salary as SALARY from employees;