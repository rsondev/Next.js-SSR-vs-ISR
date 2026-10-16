CREATE DATABASE IF NOT EXISTS nextdemo;
USE nextdemo;
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO products (name, price) VALUES
 ('Laptop', 45999.00), ('Mouse', 599.00), ('Keyboard', 1299.00),
 ('Monitor', 8999.00), ('Webcam', 1899.00), ('Headset', 2499.00);
