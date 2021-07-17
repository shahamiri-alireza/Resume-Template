var darkMode = true;
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
}
darkMode = !darkMode;
}