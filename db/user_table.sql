DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS(
  user_id int PRIMARY KEY,
  role_id int NOT NULL,
  supervisor_id NOT NULL,
  user_name varchar(100) UNIQUE NOT NULL,
  password varchar(200) NOT NULL,
  first_name varchar(100),
  last_name varchar(100),
  email varchar(300) UNIQUE NOT NULL,
  created_on timestamp NOT NULL,
  last_login timestamp
);

