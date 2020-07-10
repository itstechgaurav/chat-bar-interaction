const element = document.getElementById("widget-right");
const actionElm = document.getElementById("widget-action");
const subAElm = document.querySelector("#widget-action > i");
const widget = document.getElementById("widget");

element.isRotated = true;

actionElm.addEventListener('click', _ => {
    if(element.isRotated) {
        element.style.transform = "rotate(0deg)";
        subAElm.style.transform = "rotate(-135deg)";
        widget.style.animation = "anm2 .6s .1s cubic-bezier(0,-0.52, 0.94, 1.1)";
    } else {
        element.style.transform = "rotate(90deg)";
        subAElm.style.transform = "rotate(0deg)";
        widget.style.animation = "anm1 .6s .1s cubic-bezier(0,-0.52, 0.94, 1.1)";
    }
    element.isRotated = !element.isRotated;
})