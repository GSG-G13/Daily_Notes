BEGIN;

DROP TABLE IF EXISTS notes CASCADE;

CREATE TABLE notes(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL ,
    content TEXT NOT NULL,
    creattime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    
);

INSERT INTO notes(title , content) values 
('cooking', 'dont forget to cook today!'),
('reading', 'read a story before sleeping!'),
('writting', 'write your assignment!');

COMMIT;