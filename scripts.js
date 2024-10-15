function hide(){
    var projectItem = document.getElementsByClassName("projectItem");
    for (var i = 0; i < projectItem.length; i ++) {
        projectItem[i].style.display = 'none';
    }
    var projects = document.getElementById("projects");
    projects.style.display = "none";
    var name = document.getElementById("name");
    name.style.display="none";   
    var bottomLeft = document.getElementById("bottomLeft");
    bottomLeft.style.display = 'none'; 
    var topLeft = document.getElementById("topLeft");
    topLeft.style.display = 'none'; 
    var aboutMe = document.getElementById("aboutMe");
    aboutMe.style.display="none";
}

function home(){
    hide()
    var aboutMe = document.getElementById("aboutMe");
    aboutMe.style.display="none";
    var projects = document.getElementById("projects");
    projects.style.display="none";
    var name = document.getElementById("name");
    name.style.display="block";   
    var bottomLeft = document.getElementById("bottomLeft");
    bottomLeft.style.display = 'block';
    var topLeft = document.getElementById("topLeft");
    topLeft.style.display = 'block';
}

function projects() {
    hide()
    var projects = document.getElementById("projects");
    projects.style.display = "block";
    }

function aboutMe(){
    hide()   
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