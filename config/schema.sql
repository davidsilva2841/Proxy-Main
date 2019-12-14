# SQL database schema
DROP DATABASE IF EXISTS  WestBuy;
CREATE DATABASE IF NOT EXISTS WestBuy;
USE WestBuy;

create table Products (
    ID int auto_increment primary key,
    Name text not null,
    Price int null,
    SKU text null,
    Model text null,
    OnHand int null
);

create table Images (
    ProductID int not null,
    URL text not null,
    constraint Images_Products_ID_fk
        foreign key (ProductID) references Products (ID)
);

create table Questions (
    ProductID int not null,
    QuestionID int auto_increment primary key,
    Question text not null,
    constraint Questions_Products_ID_fk
        foreign key (ProductID) references Products (ID)
);

create table Answers (
    QuestionID int not null,
    Answer text not null,
    constraint Answers_Questions_QuestionID_fk
        foreign key (QuestionID) references Questions (QuestionID)
);

create table Reviews (
    ProductID int not null,
    Review text not null,
    constraint Reviews_Products_ID_fk
        foreign key (ProductID) references Products (ID)
);

