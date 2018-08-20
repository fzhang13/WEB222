/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: Xin Song (Felix) Zhang  Student ID: 111976171 Date: May 12th 2018
*
********************************************************************************/


/*****************************
* Task 1
*****************************/


var studenName = "Xin Song (Felix) Zhang";
var numberOfCourses = 5;
var program = "CPA";
var job = false;

console.log("My name is " + studenName + ", and I'm in " + program +
            ". I'm taking " + numberOfCourses + " courses in this semster." +
            " and I " + (job ? "have" : "don't have") + " a part time job");

/*****************************
* Task 2
*****************************/

var year = 2018;
var age = prompt("Please enter your age:");

console.log("You were born in the year of "+ (year - age));

var college = prompt("Enter the number of years you expect to study in college:");
console.log("You will graduate from Seneca college in the year of " +
            (Number(year) + Number(college)));


/*****************************
* Task 3
*****************************/

var tempC = 32.00;
var tempFahrenheit = tempC * 9/5 + 32;
console.log(tempC + "°C is " + tempFahrenheit + "°F.");

var tempF = 99.00;
var tempCelsius = (tempF - 32 ) * 5 /9;
console.log(tempF + "°F is " + tempCelsius + "°C." );



/*****************************
* Task 4
*****************************/

for(var i = 0 ; i <= 10 ; i ++){
  var number = i % 2;
  if (number == 0){
    console.log(i + " is even");
  }
  else console.log(i + " is odd");
}

/*****************************
* Task 5
*****************************/

function largerNum(num1, num2){
  return (num1 > num2 ? num1 : num2);
}
var greaterNum = function (num1, num2){
  return (num1 > num2 ? num1 : num2);
}
console.log("The larger number of 5 and 12 is " + largerNum(5,12));
console.log("The larger number of 100 and 8 is " + largerNum(100,8));

console.log("The larger number of 6 and 40 is " + greaterNum(6,40));
console.log("The larger number of 80 and 2 is " + greaterNum(80,2));


/*****************************
* Task 6
*****************************/

function Evaluator(){
	var sum = 0;
	for (i =0; i < arguments.length; i ++)
		sum += arguments[i];
	return (sum / arguments.length >= 50 ? true : false);

}

console.log("Average of 10, 100, 40, 80, 90, 400, grater than or equal to 50: "+
            Evaluator(10, 100, 40, 80, 90, 400));
console.log("Average of 1, 100, 10, 20, 40, 300, grater than or equal to 50: "+
            Evaluator(1, 100, 10, 20, 40, 300));
console.log("Average of 15, 10, 30, 5, 4, 1, grater than or equal to 50: "+
            Evaluator(15, 10, 30, 5, 4, 1));

/*****************************
* Task 7
*****************************/

var Grader = function(grade){
  if (grade >= 90 && grade <= 100)
   return "A+";
  else if (grade >= 80 && grade <= 89)
   return "A";
  else if (grade >= 75 && grade <= 79)
   return "B+";
  else if (grade >= 70 && grade <= 74)
   return "B";
  else if (grade >= 65 && grade <= 69)
   return "C+";
  else if (grade >= 60 && grade <= 64)
   return "C";
  else if (grade >= 55 && grade <= 59)
   return "D+";
  else if (grade >= 50 && grade <= 54)
   return "D";
  else
   return "F";

};

console.log("A mark of 69 is grade: " + Grader(69));
console.log("A mark of 78 is grade: " + Grader(78));
console.log("A mark of 95 is grade: " + Grader(95));

/*****************************
* Task 8
*****************************/


function showMultiples(num, numMultiples){
  for(i = 1; i <= numMultiples; ++i){
    console.log( num +" x " + i + " = " + (num * i));
   }
}
showMultiples(5,6)
showMultiples(7,3)
showMultiples(8,5)
