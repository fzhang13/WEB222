// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

var fruitsDisplay = function(){
    var container = document.querySelector("#fruit");

       container.innerHTML = "<ol>" + "<li>"+ fruits[0] +"</li>" 
                           + "<li>"+ fruits[1] +"</li>"
                           + "<li>"+ fruits[2] +"</li>"
                           + "<li>"+ fruits[3] +"</li>"
                           + "<li>"+ fruits[4] +"</li>"
                           + "<li>"+ fruits[5] +"</li>"+ "</ol>";
};

var directoryDisplay = function(){
    var directoryContainer = document.querySelector("#directory");

    directoryContainer.innerHTML = "<ul>"+"<li>" + directory[0].name + "</li>"
                                 + "<li>" + directory[1].name + "</li>" 
                                 + "<li>" + directory[2].name + 
                                 "<ul>" + "<li>" +directory[2].files[0].name +"</li>" +
                                 "<li>" +directory[2].files[1].name +"</li>" 
                                 +"</ul>"+"</li>"
                                 +"<li>" +directory[3].name +"</li>" 
                                 +"<li>" +directory[4].name +"<ul>" + "<li>" +directory[4].files[0].name +"</li>" +
                                 "<li>" +directory[4].files[1].name +"</li>" + "<li>" +directory[4].files[2].name +"</li>" 
                                 +"</ul>"+"</li>"+"</ul>" ;
};

window.onload = function(){
    fruitsDisplay();
    directoryDisplay();
}