CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE BURGERS (
  id          INT AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured    BOOLEAN      NOT NULL
  PRIMARY KEY(id)
);