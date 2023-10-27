

--1.Add gender column for the student table[Enum] It holds two value (male or female)
create type gender as enum('male', 'female');
alter table student
add column gender char(7) ; 
--2.Add birth date column for the student table
alter table student
add column birthdate date ;
--3.Delete the name column and replace it with two columns
--first name and last name
alter table student add column firstname varchar(20) ; 
alter table student add column lastname varchar(20) ; 

alter table student drop column name  ; 

--4.Delete the address and email column and replace it with
--contact info ( email) as object/Composite Data type

CREATE TYPE contact_info_type AS (
    email VARCHAR(25)
);
alter table student add column contact_info contact_info_type ; 
alter table student drop column email  ; 
alter table student drop column address  ; 

--5.Change any Serial Datatype at your tables to smallInt

--6.Add/Alter foreign key constrains in Your Tables
-- alter table study
-- add column studentname varchar(20) ;
-- add constraint nameofstudent
-- foreign key (studentname)
-- references student(name) on delete set null ;
--7.Insert new data in all Tables
insert into student 
values('11555','male',now(),'mohammed','saad'),
('88555','male',now(),'mohammed','saad'),
('24555','female',now(),'eman','saad');

--8.Display all students’ information
SELECT * FROM student;
--9.Display male students only
SELECT * FROM student where gender='male'; 
--10.Display the number of female students
SELECT * FROM student where gender='female'; 

--11.Display the students who are born before 1992 10 01
SELECT * FROM student where birthdate='1992-10-01'; 

--12.Display male students who are born before 1991 10 01
SELECT * FROM student
 where birthdate='1992-10-01';
SELECT * FROM student
where gender='male'; 

--13.Display subjects and their max score sorted by max score
SELECT * FROM subject  ;
insert into subject 
values('math','mmmmm','50'),
('python','pppppp','150'),
('c','ccccc','100');
SELECT * FROM subject  order by maxScore;

--14.Display the subject with highest max score
SELECT * FROM subject  order by maxScore Desc;


--15.Display students’ names that begin with A
SELECT * FROM student  where firstname LIKE 'A%';

--16.Display the number of students’ their name is "mohammed"
SELECT * FROM student where firstname='mohammed'; 

--17.Display the number of males and females
SELECT * FROM student;
--18.Display the repeated first names and their counts if higher than 2

--19.Display the all Students and track name that belong to it
insert into track 
values('1','cs','@hhhhh'),
('2','web','@jjjjj'),
('3','ccccc','@kkkkk');
SELECT * FROM belong;
insert into belong 
values('cs','11555'),
('web','88555'),
('ccccc','24555');
SELECT * FROM belong;

--20.Bouns Display students’ names, their score and subject name
SELECT * FROM study;
insert into study 
values('11555','20'),
('88555','80'),
('24555','100');
SELECT studentPhone,examScore FROM study;
-- ALTER TABLE study 
-- ADD constraint fk_subjectname FOREIGN KEY (nameofsubj) REFERENCES subject (subjectName);  

