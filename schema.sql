DROP TABLE IF EXISTS books;

CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    isbn VARCHAR(255),
    image_url VARCHAR(255),
    description TEXT,
    bookshelf VARCHAR(255)

);

INSERT INTO books (title, author, isbn, image_url, description, bookshelf) VALUES ('Name of the Wind', 'Patrick Rothfuss', '8675309','https://images-na.ssl-images-amazon.com/images/I/51JThzjy3gL._SX306_BO1,204,203,200_.jpg', 'A good book or maybe the best book if your name is Rachael', 'bookshelf?');

INSERT INTO books (title, author, isbn, image_url, description, bookshelf) VALUES ('Wise Mans Fear, The', 'Patrick Rothfuss', '8675309999','https://images-na.ssl-images-amazon.com/images/I/51JThzjy3gL._SX306_BO1,204,203,200_.jpg', 'A good book or maybe the best book if your name is Rachael', 'bookshelf?');


