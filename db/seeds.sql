USE eat_da_burger;

INSERT INTO burgers (name) VALUES ("Cheese Burger");
INSERT INTO burgers (name) VALUES ("Bacon Cheese Burger");
INSERT INTO burgers (name) VALUES ("Chicken Burger");
INSERT INTO burgers (name) VALUES ("Lamb Burger");
INSERT INTO burgers (name) VALUES ("Guacamole Burger");
INSERT INTO burgers (name) VALUES ("Double Cheese Burger");
INSERT INTO burgers (name, devoured) VALUES ("Vegan Burger", true);
INSERT INTO burgers (name, devoured) VALUES ("Southwest Burger", true);

SELECT * FROM burgers;