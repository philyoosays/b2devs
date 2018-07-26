DROP DATABASE b2devs;
CREATE DATABASE b2devs;

\c b2devs

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  fname TEXT,
  lname TEXT,
  email TEXT,
  pass_digest TEXT,
  headshot TEXT,
  resume TEXT,
  status TEXT,
  seeking TEXT,
  website TEXT,
  github TEXT,
  linkedin TEXT,
  dev_type TEXT,
  rate TEXT,
  account_type TEXT,
  created TIMESTAMP DEFAULT NOW(),
  isdeleted BOOLEAN DEFAULT false
);

CREATE TABLE business (
  id SERIAL PRIMARY KEY,
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
