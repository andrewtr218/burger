DROP DATABASE IF EXISTS burgers_db;

CREATE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar(100),
    devoured BOOLEAN DEFAULT NULL
);