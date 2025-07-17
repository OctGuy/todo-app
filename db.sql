drop database if exists todoapp;

create database if not exists todoapp;
use todoapp;

create table if not exists `user`
(
	user_id int auto_increment primary key,
    username varchar(20) not null,
    `password` varchar(200) not null,
    email varchar(100) not null
);

create table if not exists task
(
	task_id int auto_increment primary key,
    user_id int not null,
    title varchar(200) not null,
    `description` varchar(200),
    deadline datetime not null,
    is_completed boolean not null default false,
    deleted_at datetime default null,
    foreign key (user_id) references `user`(user_id)
);
