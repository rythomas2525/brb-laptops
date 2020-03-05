CREATE DATABASE brb_laptops;
USE brb_laptops;


-- reference for laptop table definitions
CREATE TABLE laptops (
    id INT NOT NULL AUTO_INCREMENT,
    brand VARCHAR(30) NOT NULL,
    model VARCHAR(30) NOT NULL,
    operating_system VARCHAR(30) NOT NULL,
    laptop_condition INT NOT NULL,
    processor VARCHAR(30) NOT NULL,
    graphics VARCHAR(50),
    ram INT NOT NULL,
    screen_dimension INT NOT NULL,
    hd_storage VARCHAR(10) NOT NULL,
    release_year INT,
    summary TINYTEXT,
    price INT NOT NULL,
    PRIMARY KEY (id)
);




