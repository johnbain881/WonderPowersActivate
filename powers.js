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
    if (flight.classList.contains("enabled")) {
        flight.classList.remove("enabled");
        flight.classList.add("disabled");
    }
    else {
        flight.classList.remove("disabled");
        flight.classList.add("enabled");
    }
})
activateMindReading.addEventListener("click", function (){
    if (mindReading.classList.contains("enabled")) {
        mindReading.classList.remove("enabled");
        mindReading.classList.add("disabled");
    }
    else {
        mindReading.classList.remove("disabled");
        mindReading.classList.add("enabled");
    }
})
activateXray.addEventListener("click", function (){
    if (xray.classList.contains("enabled")) {
        xray.classList.remove("enabled");
        xray.classList.add("disabled");
    }
    else {
        xray.classList.remove("disabled");
        xray.classList.add("enabled");
    }
})
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