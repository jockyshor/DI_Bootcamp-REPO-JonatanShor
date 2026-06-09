CREATE TABLE Items (
    itemID  SERIAL PRIMARY KEY ,
    item_name VARCHAR (25) NOT NULL,
    item_price SMALLINT NOT NULL
);

CREATE TABLE Customers (
    customerID  SERIAL PRIMARY KEY ,
    first_name VARCHAR (25) NOT NULL,
    last_name VARCHAR (25) NOT NULL
);

INSERT INTO Items (item_name, item_price)
VALUES ('Small Desk', 100),
('Large Desk', 300),
('Fan', 80);


INSERT INTO Customers (first_name, last_name)
VALUES ('Greg', 'Jones'),
('Sandra', 'Jones'), 
('Scott', 'Scott'), 
('Trevor', 'Green'),
('Melanie', 'Johnson');




SELECT * FROM Items;

SELECT * FROM Items WHERE price > 80;

SELECT * FROM Items WHERE price <= 300;

SELECT * FROM Customers WHERE last_name = 'Smith';

SELECT * FROM Customers WHERE last_name = 'Jones';

SELECT * FROM Customers WHERE last_name != 'Jones';


