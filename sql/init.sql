CREATE EXTENSION IF NOT EXISTS 'uuid-ossp'; --Habilita o uso do uuid
CREATE EXTENSION IF NOT EXISTS 'pgcrypto'; --Habilita o usu do crypt

CREATE TABLE IF NOT EXISTS application_user(
    uuid uuid DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
)

INSERT INTO application_user (username, password) VALUES ('admin', crypt('admin', 'my_salt')) --cript do próprio postgres, crypt('senha', 'salto')