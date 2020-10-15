-- =============================================================
-- schema for the database
-- =============================================================
DROP DATABASE IF EXISTS eat_da_burger;

CREATE DATABASE eat_da_burger;

USE eat_da_burger;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);