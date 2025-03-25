const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    let btnSave = document.getElementsByClassName("btnSave");
    update();
}

const update = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreed").value;
    let blue = document.getElementById("sldBlue").value;
    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;

    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";

}

const save = () => {
    let swatchKleur = document.getElementById("swatch");

}
window.addEventListener("load", setup);