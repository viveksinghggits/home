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
    document.getElementById("blog").addEventListener('click', function (){
        // window.location.href="https://medium.com/@viveksinghggits"
        // CNCF, kasten, fission, medium
        displayBlogs(this);
    });

});

function displayBlogs(e){
    e.classList.add("bor-bot");
    document.getElementById("profs").classList.remove("bor-bot");
    document.getElementById("work").classList.remove("bor-bot");
    hideThis("default");
    hideThis("profiles");
    hideThis("workingnow");
    hideThis("projects")
    displayThis("blogs");
}

function displayDefaults(){
    hideThis("projects");
    hideThis("profiles");
    hideThis("workingnow");
    hideThis("blogs");
    displayThis("default");
    document.getElementById("profs").classList.remove("bor-bot");
    document.getElementById("blog").classList.remove("bor-bot");
    document.getElementById("work").classList.remove("bor-bot");
    document.getElementById("projs").classList.remove("bor-bot");
}
function displayProjects(e){
    e.classList.add("bor-bot");
    document.getElementById("profs").classList.remove("bor-bot");
    document.getElementById("work").classList.remove("bor-bot");
    document.getElementById("blog").classList.remove("bor-bot");
    hideThis("default");
    hideThis("profiles");
    hideThis("blogs");
    hideThis("workingnow");
    displayThis("projects");
}
function displayProfiles(e){
    e.classList.add("bor-bot");
    document.getElementById("projs").classList.remove("bor-bot");
    document.getElementById("work").classList.remove("bor-bot");
    document.getElementById("blog").classList.remove("bor-bot");
    hideThis("default");
    hideThis("projects");
    hideThis("blogs");
    hideThis("workingnow");
    displayThis("profiles");
}
function displayWorkingNow(e){
    e.classList.add("bor-bot");
    document.getElementById("profs").classList.remove("bor-bot");
    document.getElementById("blog").classList.remove("bor-bot");
    document.getElementById("projs").classList.remove("bor-bot");
    hideThis("default");
    hideThis("projects");
    hideThis("blogs");
    hideThis("profiles");
    displayThis("workingnow");
}
function hideThis(ele){
    document.getElementById(ele).style.display="none";
}
function displayThis(ele){
    document.getElementById(ele).style.display="block";
}
