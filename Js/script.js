var darkMode = true;
const moonIcon = document.getElementById("moon");
const sunIcon = document.getElementById("sun");
function switchMode(){
    if (darkMode){
    document.querySelectorAll(".bg-dark").forEach(element => {
        element.classList.toggle("bg-dark");
        element.classList.toggle("bg-light");
    });
    document.querySelectorAll(".text-light").forEach(element => {
        element.classList.toggle("text-light");
        element.classList.toggle("text-dark");
    });
    document.querySelectorAll(".navbar-dark").forEach(element => {
        element.classList.toggle("navbar-dark");
        element.classList.toggle("navbar-light");
    });
    moonIcon.classList.toggle("d-none");
    sunIcon.classList.toggle("d-none");
}
else{
    document.querySelectorAll(".bg-light").forEach(element => {
        element.classList.toggle("bg-dark");
        element.classList.toggle("bg-light");
    });
    document.querySelectorAll(".text-dark").forEach(element => {
        element.classList.toggle("text-light");
        element.classList.toggle("text-dark");
    });
    document.querySelectorAll(".navbar-light").forEach(element => {
        element.classList.toggle("navbar-dark");
        element.classList.toggle("navbar-light");
    });
    moonIcon.classList.toggle("d-none");
    sunIcon.classList.toggle("d-none");
}
darkMode = !darkMode;
}