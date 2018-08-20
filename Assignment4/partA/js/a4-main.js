var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)


function loadTableWithFilters(){
    var main = document.getElementById("main-table-body").innerHTML = "";
    for(var i = 0; i < petData.length; ++i){
        if((filterType == "dog" && petData[i].type == "dog")|| (filterType == "cat" && petData[i].type =="cat")||(filterType =="bird" && petData[i].type == "bird")|| filterType =="" ){
            if(petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax){
                var tr = document.createElement("tr");
                var td = document.createElement("td");
                var img = document.createElement("img");
                img.setAttribute("src", petData[i].image.src);
                img.setAttribute("alt", petData[i].image.alt);
                img.setAttribute("height", petData[i].image.height);
                img.setAttribute("width", petData[i].image.width);
                td.appendChild(img);
                var tdname = document.createElement("td");
                var h4 = document.createElement("h4");
                var name = document.createTextNode(petData[i].name);
                tdname.appendChild(name);
                var p = document.createElement("p");
                p.innerHTML = petData[i].description;
                var span = document.createElement("span");
                var agestring = "Age: " + petData[i].age + " years old";
                var age = document.createTextNode(agestring);
                span.appendChild(age);
                tdname.appendChild(h4);
                tdname.appendChild(p);
                tdname.appendChild(span);
                tr.appendChild(td);
                tr.appendChild(tdname);
                document.getElementById("main-table-body").appendChild(tr);

            }
        }
    }
}

function filterDog(){
    filterType = "dog";
    loadTableWithFilters();
}

function filterCat(){
    filterType = "cat";
    loadTableWithFilters();
}

function filterBird(){
    filterType = "bird";
    loadTableWithFilters();
}

function filter_zero_1(){
    filterAgeMax = 1;
    filterAgeMin = 0;
    loadTableWithFilters();
}

function filter_1_3(){
    filterAgeMax = 3;
    filterAgeMin = 1;
    loadTableWithFilters();
}

function filter_4_plus(){
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

function filterAllpets(){
    filterType = "";
    filterAgeMax = Number.MAX_VALUE;
    filterAgeMin = 0;
    loadTableWithFilters();
}

window.onload = function(){
    loadTableWithFilters();
}