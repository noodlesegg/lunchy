DROP DATABASE IF EXISTS lunchy;

CREATE DATABASE IF NOT EXISTS lunchy;

USE lunchy;

CREATE TABLE user(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	user_name VARCHAR(30),
	email VARCHAR(50),
	password CHAR(41),
	name VARCHAR(255)
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

INSERT INTO user(user_name, email, password, name) VALUES
('marjune', 'mbatac@cambridge.org', PASSWORD('pa$$w0rd'), 'Marjune'),
('elmer', 'ebaluyo@cambridge.org', PASSWORD('pa$$w0rd'), 'Elmer');