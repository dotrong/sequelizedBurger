create database burgers_db;
create table burgers (
	id int(11) not null auto_increment,
	burger_name varchar(64),
    devoured bool default false,
    -- add createdAt for JAWSDB
    -- createdAt TIMESTAMP NOT NULL,
    date datetime,
    primary key (id)
    
);