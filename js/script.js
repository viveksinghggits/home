document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("projs").addEventListener('click', function (){
        displayProjects(this);
    });
    document.getElementById("profs").addEventListener('click', function (){
        displayProfiles(this);
    });
    document.getElementById("work").addEventListener('click', function (){
        displayWorkingNow(this);
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
    document.getElementById("profs").classList.remove("bor-bot");
    document.getElementById("work").classList.remove("bor-bot");
    document.getElementById("projs").classList.remove("bor-bot");
}
function displayProjects(e){
    e.classList.add("bor-bot");
    document.getElementById("profs").classList.remove("bor-bot");
    document.getElementById("work").classList.remove("bor-bot");
    hideThis("default");
    hideThis("profiles");
    hideThis("workingnow");
    displayThis("projects");
}
function displayProfiles(e){
    e.classList.add("bor-bot");
    document.getElementById("projs").classList.remove("bor-bot");
    document.getElementById("work").classList.remove("bor-bot");
    hideThis("default");
    hideThis("projects");
    hideThis("workingnow");
    displayThis("profiles");
}
function displayWorkingNow(e){
    e.classList.add("bor-bot");
    document.getElementById("profs").classList.remove("bor-bot");
    document.getElementById("projs").classList.remove("bor-bot");
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
