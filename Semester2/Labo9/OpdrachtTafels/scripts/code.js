let tafels = [];

const setup = () => {

    let btnGo=document.getElementById("btnGo");
    btnGo.addEventListener("click", createTable);
}

const createTable = () => {
    let txtStartGetal = document.getElementById("tafel");
    let startGetal = parseInt(txtStartGetal.value);
    if(isNaN(startGetal)) {
        alert("Geen geldig getal");
    } else {
        let tafel = {
            start: startGetal,
            datum: new Date()
        };
        tafels.push(tafel);
        showTafels();
        txtStartGetal.value = "";
    }
};

const showTafels = () => {
    let tafelsDiv = document.getElementById("tafels");
    verwijderAlleChildren(tafelsDiv);

    for (let i = 0; i<tafels.length; i++) {
        let tafel = tafels[i];
        tafelsDiv.appendChild(createTafel(tafel));
    }
};

const createTafel = (tafel) => {
    let tafelDiv = document.createElement("div");

    tafelDiv.appendChild(createHeader(tafel));
    tafelDiv.setAttribute("class", "tafel");

    for (let i = 1; i <= 10; i++) {
        let row = document.createElement("div");

        if (i%2 == 0) {
            row.setAttribute("class", "even");
        }
        row.appendChild(document.createTextNode(tafel.start + " x " + i + " = " + tafel.start*i));
        tafelDiv.appendChild(row);
    }
    return tafelDiv;
};

const createHeader = (tafel) => {
    let headerDiv = document.createElement("div");
    headerDiv.setAttribute("class", "header");

    let headerNode = document.createTextNode("Tafel van " + tafel.start + " aangemaakt op: " + tafel.datum.toTimeString().substring(0,8));
    headerDiv.appendChild(headerNode);
    return headerDiv;
};

const verwijderAlleChildren = (element) => {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
};

window.addEventListener("load", setup);