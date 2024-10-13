screen.orientation.lock();

function hide(){
    var projects = document.getElementsByClassName("projects");
    for (var i = 0; i < projects.length; i ++) {
        projects[i].style.display = 'none';
    }
    var myWork = document.getElementById("myWork");
    myWork.style.display = "none";
}

function myWork() {
    var projects = document.getElementsByClassName("projects");
    for (var i = 0; i < projects.length; i ++) {
        projects[i].style.display = 'none';
    }   
    var name = document.getElementById("name");
    name.style.display="none";   
    var bottomLeft = document.getElementsByClassName("bottomLeft");
    for (var i = 0; i < bottomLeft.length; i ++) {
        bottomLeft[i].style.display = 'none';
    }   
    var topLeft = document.getElementsByClassName("topLeft");
    for (var i = 0; i < topLeft.length; i ++) {
        topLeft[i].style.display = 'none';
    }   
    var aboutMe = document.getElementById("aboutMe");
    aboutMe.style.display="none";
    var myWork = document.getElementById("myWork");
    myWork.style.display = "block";
    }

function home(){
    var projects = document.getElementsByClassName("projects");
    for (var i = 0; i < projects.length; i ++) {
        projects[i].style.display = 'none';
    }   
    var name = document.getElementById("name");
    name.style.display="block";   
    var bottomLeft = document.getElementsByClassName("bottomLeft");
    for (var i = 0; i < bottomLeft.length; i ++) {
        bottomLeft[i].style.display = 'block';
    }   
    var topLeft = document.getElementsByClassName("topLeft");
    for (var i = 0; i < topLeft.length; i ++) {
        topLeft[i].style.display = 'block';
    }   
    var a = document.getElementById("aboutMe");
    a.style.display="none";
    var y = document.getElementById("myWork");
    y.style.display="none";
}

function aboutMe(){
    var projects = document.getElementsByClassName("projects");
    for (var i = 0; i < projects.length; i ++) {
        projects[i].style.display = 'none';
    }   
    var name = document.getElementById("name");
    name.style.display="none";   
    var bottomLeft = document.getElementsByClassName("bottomLeft");
    for (var i = 0; i < bottomLeft.length; i ++) {
        bottomLeft[i].style.display = 'none';
    }   
    var topLeft = document.getElementsByClassName("topLeft");
    for (var i = 0; i < topLeft.length; i ++) {
        topLeft[i].style.display = 'none';
    }   
    var myWork = document.getElementById("myWork");
    myWork.style.display="none";      
    var aboutMe = document.getElementById("aboutMe");
    aboutMe.style.display = "block";
}  

function passwordManager(){
    hide()
    var passwordManager = document.getElementById("passwordManager");
    passwordManager.style.display="block";
}

function nasServer(){
    hide()
    var nasServer = document.getElementById("nasServer");
    nasServer.style.display="block";
}

function clipboardManager(){
    hide()
    var clipboardManager = document.getElementById("clipboardManager");
    clipboardManager.style.display="block";
}

function buildingThisWebsite(){
    hide()
    var buildingThisWebsite = document.getElementById("buildingThisWebsite");
    buildingThisWebsite.style.display="block";
}

function battleship(){
    hide()
    var battleship = document.getElementById("battleship");
    battleship.style.display="block";
}

function webDesign(){
    hide()
    var webDesign = document.getElementById("webDesign");
    webDesign.style.display="block";
}

function graphicalCalculator(){
    hide()
    var graphicalCalculator = document.getElementById("graphicalCalculator");
    graphicalCalculator.style.display="block";
}

function usingLinux(){
    hide()
    var usingLinux = document.getElementById("usingLinux");
    usingLinux.style.display="block";
}

function commonAlgorithms(){
    hide()
    var commonAlgorithms = document.getElementById("commonAlgorithms");
    commonAlgorithms.style.display="block";
}