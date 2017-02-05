DROP DATABASE IF EXISTS reservation;

CREATE DATABASE IF NOT EXISTS reservation;

USE reservation;

CREATE TABLE user(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	user_name VARCHAR(30),
	email VARCHAR(50),
	password CHAR(41),
	first_name VARCHAR(50),
	last_name VARCHAR(50)
);

CREATE TABLE menu(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100),
	description VARCHAR(255),
	price DECIMAL(2, 2)
);

CREATE TABLE reserve(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	userId INT NOT NULL,
	menuId INT NOT NULL,
	FOREiGN KEY(userId) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOReiGN KEY(menuId) REFERENCES menu(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO user(user_name, email, password, first_name, last_name) VALUES
('marjune', 'mbatac@cambridge.org', PASSWORD('pa$$w0rd'), 'Marjune', 'Batac'),
('elmer', 'ebaluyo@cambridge.org', PASSWORD('pa$$w0rd'), 'Elmer', 'Baluyo');