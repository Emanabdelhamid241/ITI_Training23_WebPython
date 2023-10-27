var students = [{ fname: 'ali', age: 22, grade:100 },
       { fname: 'nora', age: 20, grade:90 },
       { fname: 'nada', age: 25, grade:75 },
       { fname: 'heba', age: 19, grade:50 },
       { fname: 'bassem', age: 21, grade:40 }
       ];
     students.forEach(function (student) {   
           document.write(student.fname +':'+student.age +':'+student.grade)
                      document.write("<br></br>")
           })
/**************************************************************************************************************** */ 
document.write("<h1 color=red >students have grade larger than 80</h1>")

let getlargnumbers=students.filter(function (student){
            return (student.grade>80); 
           });
           getlargnumbers.forEach(function (student) {   
            document.write(student.fname +':'+student.age +':'+student.grade)
                       document.write("<br></br>")
            })
       /************************************************************************ */

       document.write("<h1 color=red>ordered by ascanding by names</h1>")
       sortedList = students.sort((a, b) => a.fname.localeCompare(b.fname));

        // let sortedArray = students.sort();
        sortedList.forEach(function (student){   
        document.write(student.fname +':'+student.age +':'+student.grade)
                   document.write("<br></br>")
        })
// console.log(sortedArray);

