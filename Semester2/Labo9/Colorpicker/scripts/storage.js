const storeSliderValues = () => {

    let rgb = {
        red: document.getElementById("sldRed").value,
        green: document.getElementById("sldGreen").value,
        blue: document.getElementById("sldBlue").value
    }

    // bewaren van het object
    let jsonText = JSON.stringify(rgb);
    localStorage.setItem("VIVES.be.colorpicker.sliders", jsonText);
};

const restoreSliderValues = () => {

    let jsonText = localStorage.getItem("VIVES.be.colorpicker.sliders");

    if(jsonText != null) {
        let rgb = JSON.parse(jsonText);
        document.getElementById("sldRed").value = rgb.red;
        document.getElementById("sldGreen").value = rgb.green;
        document.getElementById("sldBlue").value = rgb.blue;
    }
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let rgbColors = [];
    let swatches = document.querySelectorAll("#swatchComponents .swatch");
    for (let i = 0; i < swatches.length; i++) {
        let rgb = {
            red: swatches[i].getAttribute("data-red"),
            blue: swatches[i].getAttribute("data-blue"),
            green: swatches[i].getAttribute("data-green")
        }
        rgbColors.push(rgb);
    }

    let jsonText = JSON.stringify(rgbColors);
    localStorage.setItem("VIVES.be.colorpicker.swatches", jsonText);

};

const restoreSwatches = () => {
    let jsonText = localStorage.getItem("VIVES.be.colorpicker.swatches");

    if (jsonText != null) {
        let rgb = JSON.parse(jsonText);
        for (let i = 0; i < rgb.length; i++) {
           let value = rgb[i];
           let buildSwatch = buildSwatchComponent(value.red, value.green, value.blue);
           let swatchComponents = document.getElementById("swatchComponents");
           swatchComponents.appendChild(buildSwatch);
        }
    }
};
