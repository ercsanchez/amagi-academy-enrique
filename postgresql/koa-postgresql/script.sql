CREATE TABLE cards (  
  id serial NOT NULL,
  data jsonb
);

-- INSERT INTO cards (data) VALUES ('{"name1": "card1", "name2": "card2", "name": "card3", "name": "card4"}')
-- INSERT INTO cards (data) VALUES ('{"name1": "card1", "name2": "card2", "name": "card3", "name": "card4"}');

INSERT INTO cards (data) 
VALUES ('{"name1": "card1", "name2": "card2", "name": "card3", "name": "card4"}'),
       ('{"name1": "card1", "name2": "card2", "name": "card3", "name": "card4"}');