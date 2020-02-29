CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id int NOT NULL
    IDENTITY (1, 1),
	burger_name varchar
    (255) NOT NULL,
    devoured BOOLEAN NOT NULL,
	PRIMARY KEY
    (id)
);