CREATE DATABASE bootcamp;

CREATE TABLE students(
    student_id SERIAL PRIMARY KEY,
    last_name VARCHAR (25) NOT NULL,
    first_name VARCHAR (25) NOT NULL,
   birthday DATE NOT NULL
)

INSERT INTO students (first_name, last_name, birthday)
VALUES ('Marc', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'),
('Lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03');

SELECT * FROM students;

SELECT first_name, last_name FROM students;

SELECT first_name, last_name FROM students WHERE student_id = 2;

SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';

SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';

SELECT first_name, last_name FROM students WHERE first_name LIKE 'A%';

SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';

SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_';

SELECT first_name, last_name FROM students WHERE student_id = 1 OR student_id = 3;


SELECT * FROM students WHERE birthday >= '2000-01-01';

