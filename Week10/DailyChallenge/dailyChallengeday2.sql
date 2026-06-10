-- as the video says, i will be doing it on the students database because i dont have access to the actors database


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


-- Instructions
-- In this exercise we will be using the actors table from todays lesson.
-- 1. Count how many actors are in the table.
-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?

--1
SELECT COUNT (*) FROM students;

--2 
INSERT INTO students (first_name, last_name, birthday)
VALUES ('Jonatan', 'Shor', ''); -- if we run it like this, we will not get an error, because it is not null, as we asked, it is empty, but empty and null are not the same,

INSERT INTO students (first_name, last_name, birthday)
VALUES ('Jonatan', 'Shor',) -- i this case we will get and error, because we are not declaring anythings as a birthday...

