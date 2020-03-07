CREATE DATABASE brb_laptops;
USE brb_laptops;




SELECT * FROM laptops
LEFT JOIN users ON user_id WHERE laptops.user_id = users.id;


