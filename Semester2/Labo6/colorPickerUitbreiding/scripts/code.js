const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    let btnSave = document.getElementById("btnSave");
    btnSave.addEventListener("click", save);
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
    let color = swatchKleur.style.backgroundColor;

    let swatchSectie = document.createElement("section");
    swatchSectie.classList.add("opgeslagenKleuren");
    swatchSectie.style.background = color;

    let btnDelete  = document.createElement("button");
    btnDelete.innerHTML = "X";
    btnDelete.classList.add("btnDelete");
    btnDelete.onclick = () => {
        swatchSectie.remove();
    }

    swatchSectie.appendChild(btnDelete);
    let kleuren = document.getElementById("opgeslagenKleuren");
    kleuren.appendChild(swatchSectie);

}
window.addEventListener("load", setup);