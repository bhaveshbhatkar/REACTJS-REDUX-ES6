DROP TABLE IF EXISTS USER_ROLE;
CREATE TABLE USER_ROLE(
  role_id int PRIMARY KEY,
  role_name varchar(100) NOT NULL,
  description varchar(200),
  created_on timestamp NOT NULL
);
