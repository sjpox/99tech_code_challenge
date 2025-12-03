use express_crud_service;

CREATE TABLE user (
    id VARCHAR(40) NOT NULL,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    PRIMARY KEY(id)
);