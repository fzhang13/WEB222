 /*******************************************************************************
    *                     WEB222 – Assignment 2
    * I declare that this assignment is my own work in accordance with Seneca
    * Academic Policy.  No part of this assignment has been copied manually or
    * electronically from any other source (including web sites) or distributed to
    * other students.
    *
    * Name: Xin Song(Felix) Zhang Student ID: 111976171 Date: Jun 5th, 2018
    *
    ******************************************************************************/


// an array of course objects
var courses = [
    { 
        code: 'APC100', 
        name: 'Applied Professional Communications', 
        hours: 3, 
        url: 'http://www.senecacollege.ca/' 
    },
    { 
        code: 'IPC144', 
        name: 'Introduction to Programming Using C', 
        hours: 4, 
        url: 'https://scs.senecac.on.ca/~ipc144/' 
    },
    { 
        code: 'ULI101', 
        name: 'Introduction to Unix/Linux and the Internet', 
        hours: 4, 
        url: 'https://cs.senecac.on.ca/~fac/uli101/live/' 
    },
    { 
        code: 'IOS110', 
        name: 'Introduction to Operating Systems Using Windows', 
        hours: 4, 
        url: 'https://cs.senecac.on.ca/~fac/ios110' 
    },
    { 
        code: 'EAC150', 
        name: 'College English', 
        hours: 3, 
        url: null 
    }
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1
var removed = courses.pop();
console.log("\n***Task 1***\n\n");
console.log("Course "+ removed.code + " was deleted from the array (courses)");

var ibc233 =  {code:'IBC233', 
               name: 'iSERIES Business Computing', 
               hours: 4, 
               url: 'https://scs.senecac.on.ca/~ibc233'
            };
var oop244 =  {code:'OOP244', 
               name: 'Introduction to Object Oriented Programming', 
               hours: 4, 
               url: 'https://scs.senecac.on.ca/~oop244'
            };
var web222 =  {code:'WEB222', 
               name: 'Internet I - Internet Fundamentals', 
               hours: 4, 
               url: 'https://scs.senecac.on.ca/~web222'
            };
var dbs201 =  {code:'DBS201', 
               name: 'Introduction to Database Design and SQL', 
               hours: 4, 
               url: 'https://scs.senecac.on.ca/~dbs201'
            };

courses.push(ibc233,oop244,web222,dbs201);
//console.log(courses);
console.log("Adding new course objects into the array (courses)\n");
console.log("\nCourses objects in the array (courses):");
for(var i = 0; i < courses.length; i ++){
    console.log(courses[i].code +",",courses[i].name+",",
     courses[i].hours+" hours/week,","website: "+ courses[i].url);
}
// task 2
console.log("\n\n***Task 2***\n\n")
console.log("Student objects in the array (students):");

var student1 = { 
    name: "John Smith", 
    dob: new Date(1999,9,10),
    sid: "010456101",
    program: "CPA", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

var student2 = { 
    name: "Jim Carrey", 
    dob: new Date(1992,1,17),
    sid: "012345678",
    program: "CPD", 
    gpa: 3.5,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

var student3 = { 
    name: "Justin Beiber", 
    dob: new Date(1994,1,17),
    sid: "0987654321",
    program: "CAN", 
    gpa: 3.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};


var student4 = { 
    name: "Justin Trudeau", 
    dob: new Date(1992,1,12),
    sid: "123456789",
    program: "CAN", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

var students = new Array(student1,student2,student3,student4);
for(var i in students){
    console.log(i + ":", students[i].toString());
}
