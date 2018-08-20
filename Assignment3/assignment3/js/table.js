// Data for the "HTML Tables" Page

var users = [
    {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
    {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
    {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
    {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
    {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
];

var tableDisplay = function(){
 var tableContainer = document.querySelector("#tableoutput");
    tableContainer.innerHTML = "<table border=1;>" + 
                                "<tr>"+
                                "<th>First name</th>"+
                                "<th>Last name</th>"+
                                "<th>Age</th>"+
                                "<th>Email</th>"+
                                "</tr>"+ 
                                "<tr>"+
                                "<th>"+users[0].first_name +"</th>"+
                                "<th>"+users[0].last_name +"</th>"+
                                "<th>"+users[0].age+"</th>"+
                                "<th>"+'<a href="mailto:kburns99753@usermail.com">'+users[0].email+"</a>"+"</th>"+
                                "</tr>"+
                                "<tr>"+
                                "<th>"+users[1].first_name +"</th>"+
                                "<th>"+users[1].last_name +"</th>"+
                                "<th>"+users[1].age+"</th>"+
                                "<th>"+'<a href="mailto:josh319726@usermail.com">'+users[1].email+"</a>"+"</th>"+
                                "</tr>"+
                                "<tr>"+
                                "<th>"+users[2].first_name +"</th>"+
                                "<th>"+users[2].last_name +"</th>"+
                                "<th>"+users[2].age+"</th>"+
                                "<th>"+'<a href="mailto:steve.shaw47628@usermail.com">'+users[2].email+"</a>"+"</th>"+
                                "</tr>"+
                                "<tr>"+
                                "<th>"+users[3].first_name +"</th>"+
                                "<th>"+users[3].last_name +"</th>"+
                                "<th>"+users[3].age+"</th>"+
                                "<th>"+'<a href="mailto:Timbo72469@usermail.com">'+users[3].email+"</a>"+"</th>"+
                                "</tr>"+
                                "<tr>"+
                                "<th>"+users[4].first_name +"</th>"+
                                "<th>"+users[4].last_name +"</th>"+
                                "<th>"+users[4].age+"</th>"+
                                "<th>"+'<a href="mailto:SarahC6320@usermail.com">'+users[4].email+"</a>"+"</th>"+
                                "</tr>"+  
                                "</table>"

};

window.onload = function(){
    tableDisplay();
};