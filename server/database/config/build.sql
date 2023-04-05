BEGIN;

DROP TABLE IF EXISTS notes CASCADE;

CREATE TABLE notes(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL ,
    content TEXT NOT NULL,
    creattime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    
);

INSERT INTO notes(title , content) values 
('reading', 'I love reading a story'),
('reading', 'I love reading a story'),
('reading', 'I love reading a story');

COMMIT;