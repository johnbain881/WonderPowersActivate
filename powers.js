const activateFlight = document.getElementById("activate-flight");
const activateMindReading = document.getElementById("activate-mindreading");
const activateXray = document.getElementById("activate-xray");
const activateAll = document.getElementById("activate-all")
const deactivateAll = document.getElementById("deactivate-all")
const flight = document.getElementById("flight")
const mindReading = document.getElementById("mindreading")
const xray = document.getElementById("xray")
const powerList = document.getElementById("powerList")


activateFlight.addEventListener("click", function (){
    togglePower(flight);
})
activateMindReading.addEventListener("click", function (){
    togglePower(mindReading);
})
activateXray.addEventListener("click", function (){
    togglePower(xray);
})
function togglePower(element) {
    if (element.classList.contains("enabled")) {
        element.classList.remove("enabled");
        element.classList.add("disabled");
    }
    else {
        element.classList.remove("disabled");
        element.classList.add("enabled");
    }
}

activateAll.addEventListener("click", function (){
    for (let i = 0; i < powerList.children.length; i++){
        if (powerList.children[i].classList.contains("disabled")){
            powerList.children[i].classList.remove("disabled");
            powerList.children[i].classList.add("enabled");
        }
    }
})
deactivateAll.addEventListener("click", function (){
    for (let i = 0; i < powerList.children.length; i++){
        if (powerList.children[i].classList.contains("enabled")){
            powerList.children[i].classList.remove("enabled");
            powerList.children[i].classList.add("disabled");
        }
    }
})