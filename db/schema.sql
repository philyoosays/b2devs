DROP DATABASE b_devs;
CREATE DATABASE b_devs;

\c b_devs

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  fname TEXT,
  lname TEXT,
  email TEXT,
  headshot TEXT,
  resume TEXT,
  status TEXT,
  seeking TEXT,
  website TEXT,
  github TEXT,
  linkedin TEXT,
  dev_type TEXT,
  tech TEXT,
  education TEXT,
  rate TEXT,
  created TIMESTAMP DEFAULT NOW(),
  isdeleted BOOLEAN DEFAULT false
);

CREATE TABLE business (
  id SERIAL PRIMARY KEY
  fname TEXT,
  lname TEXT,
  email TEXT,
  bus_name TEXT,
  website TEXT,
  budget TEXT,
  ideas TEXT,
  status TEXT,
  created TIMESTAMP DEFAULT NOW(),
  isdeleted BOOLEAN DEFAULT false
);
