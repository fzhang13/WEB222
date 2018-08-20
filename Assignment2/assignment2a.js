/*******************************************************************************
  *                     WEB222 – Assignment 2
  * I declare that this assignment is my own work in accordance with Seneca
  * Academic Policy.  No part of this assignment has been copied manually or
  * electronically from any other source (including web sites) or distributed to
  * other students.
  *
  * Name: Xin Song Felix Zhang Student ID: 111976171 Date: May 24th, 2018
  *
******************************************************************************/


/*****************************
* Step 1
*****************************/

 var e1;
 var e2;
 var e3;
 var e4;
 var e5;
 var e6;
 var e7;
 var str;


/*****************************
* Step 2
*****************************/

function capFirstLetter(string){
   string = string.toLowerCase();
   return string = string.charAt(0).toUpperCase() + string.slice(1);

}
var e1 = prompt("Please enter first name", "felix");
capFirstLetter(e1);

/*****************************
* Step 3
*****************************/

var getAge = function(number){
  var year = new Date().getFullYear();
  return year - number;

}
var e2 = prompt("please enter your birth year", 1990);
getAge(e2);

/*****************************
* Step 4
*****************************/

var e3 = prompt("please enter college name", "seneca college");
var e3 = e3.split(' ');
capFirstLetter(e3[0]);
capFirstLetter(e3[1]);


/*****************************
* Step 5
*****************************/

var e4 = prompt("please enter favorite sport",
"hockey,football,basketball,tennis,golf");
var e4 = e4.replace(/football/ig,"soccer")
var e4 = e4.split(",");
var e5 = prompt("please enter an extra favorite sport", "formula 1")
e4.push(e5);


/*****************************
* Step 6
*****************************/

e4.sort()
for(i=0;i < e4.length; i ++){
  e4[i].toUpperCase();
}


/*****************************
* Step 7
*****************************/

function getDateString(date){
    var dateString = date[0] + "-";
    dateString += ((date[1].length == 1) ? "0" : "") + (date[1]*1+1) + "-";
    dateString += ((date[2].length == 1) ? "0" : "") + date[2];
    return dateString;
}

var e6 = (new Array(3))
     e6[0] = String(new Date().getFullYear());
     e6[1] = String(new Date().getMonth());
     e6[2] = String(new Date().getDate());

e7 = getDateString(e6)
    

/*****************************
* Step 8
*****************************/
e1 = "name (e1): " + capFirstLetter(e1);
e2 = "age (e2): " + getAge(e2) ;
e3 = "school (e3): " + capFirstLetter(e3[0]) + " " + capFirstLetter(e3[1]);
e4 = "favorite sport (e4): " +"\n\t"+ e4[0].toUpperCase() +"\n\t"+
 e4[1].toUpperCase() +"\n\t"+ e4[2].toUpperCase() +"\n\t"+ e4[3].toUpperCase()
+"\n\t"+ e4[4].toUpperCase() +"\n\t"+ e4[5].toUpperCase();
e7 = "current date (e7): " + getDateString(e6);


var str = "User info: " + "\n" + "\n"
var str = str.concat(e1,"\n", e2,"\n", e3, "\n", e4, "\n", e7);
console.log(str);
