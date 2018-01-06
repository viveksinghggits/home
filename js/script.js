document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("projs").addEventListener('click', function (){
        displayProjects();
    });
    document.getElementById("profs").addEventListener('click', function (){
        displayProfiles();
    });
    document.getElementById("work").addEventListener('click', function (){
        displayWorkingNow();
    });
    document.getElementById("namelink").addEventListener('click', function (){
        displayDefaults();
    });

});
function displayDefaults(){
    hideThis("projects");
    hideThis("profiles");
    hideThis("workingnow");
    displayThis("default");
}
function displayProjects(){
    hideThis("default");
    hideThis("profiles");
    hideThis("workingnow");
    displayThis("projects");
}
function displayProfiles(){
    hideThis("default");
    hideThis("projects");
    hideThis("workingnow");
    displayThis("profiles");
}
function displayWorkingNow(){
    hideThis("default");
    hideThis("projects");
    hideThis("profiles");
    displayThis("workingnow");
}
function hideThis(ele){
    document.getElementById(ele).style.display="none";
}
function displayThis(ele){
    document.getElementById(ele).style.display="block";
}
