-- Daily Challenge : Items & Orders

-- Create a table called product_orders and a table called items. You decide which fields should be in each table, 
-- although make sure the items table has a column called price.




CREATE TABLE product_orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  order_date DATE NOT NULL
);


CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  product_order_id INTEGER NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL
);

-- Create a one to many relationship between the product_orders and items tables


ALTER TABLE items
ADD FOREIGN KEY (product_order_id)
REFERENCES product_orders (id)
ON DELETE CASCADE;

-- Create a function that returns the total price for a given order.

CREATE FUNCTION total_price(product_order_id INTEGER) RETURNS INTEGER AS $$
BEGIN
  RETURN (
    SELECT SUM(price)
    FROM items
    WHERE product_order_id = order_id
  );
END;
$$ LANGUAGE plpgsql;


-- Create a table called users



CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Create a one to many relationship between the users and product_orders tables

ALTER TABLE product_orders
ADD FOREIGN KEY (user_id)
REFERENCES users (id)
ON DELETE CASCADE;


-- Create a function that returns the total price for a given order of a given user


CREATE FUNCTION total_price_for_user(user_id INTEGER, order_id INTEGER) RETURNS INTEGER AS $$
BEGIN
  RETURN (
    SELECT SUM(price)
    FROM items
    WHERE product_order_id = order_id
    AND product_order_id IN (
      SELECT id
      FROM product_orders
      WHERE user_id = user_id
    )
  );
END;
$$ LANGUAGE plpgsql;