CREATE DATABASE metrolink_db;
USE metrolink_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mobile BIGINT NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL
);
SELECT * FROM users;


CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    from_station VARCHAR(100) NOT NULL,
    to_station VARCHAR(100) NOT NULL,
    passengers TEXT NOT NULL,
    fare INT NOT NULL,
    travel_date DATE NOT NULL,
    booking_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) 
    ON DELETE CASCADE
);


SELECT * FROM tickets;