DROP TABLE IF EXISTS ROLE_PRIVILEGE;
CREATE TABLE ROLE_PRIVILEGE(
  privilege_id int PRIMARY KEY,
  role_id int NOT NULL,
  resources varchar(300),
  actions varchar(300),
  description varchar(200),
  created_on timestamp NOT NULL
);
