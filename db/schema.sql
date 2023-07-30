DROP DATABASE IF EXISTS Delia_CarBlog;
CREATE DATABASE Delia_CarBlog;
USE Delia_CarBlog;

-- Path: db/schema.sql
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- Path: db/schema.sql
DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    body VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Path: db/schema.sql
DROP TABLE IF EXISTS comment;
CREATE TABLE comment (
    id INT NOT NULL AUTO_INCREMENT,
    body VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);