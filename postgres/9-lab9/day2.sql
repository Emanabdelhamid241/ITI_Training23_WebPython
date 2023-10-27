


create table student(studentPhone int primary key, 
name char(40) unique,
email char(20),
address char(30));

create table subject(subjectName char(20) primary key, 
description char(40) unique,
maxScore int);

create table track(idTrack int primary key, 
nameTrack char(40) unique,
email char(20),
address char(30));

create table study(studentPhone int, 
foreign key (studentPhone) references student(studentPhone),
examScore int,examDate date);

create table have(track_id int,subjectname char(20),
foreign key (track_id) references track(idTrack),
        foreign key (subjectname) references subject(subjectName)
    );

create table belong(trackname varchar(20),
studentname int,
foreign key (studentname) references student(studentPhone),
foreign key (trackname) references track(nameTrack)
    );
