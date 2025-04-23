const setup = () => {
    let btnGo = document.getElementById("btnGo");
    btnGo.addEventListener("click", createTable)
}

const tafel = () => {
    let getal = document.getElementById("tafel").value;
    let tabelContainer = document.getElementById("tabelContainer");
    let tafelDiv = document.createElement("div");

    for (let i = 0; i <= 10; i++) {
        let row = document.createElement("div");

        if(i%2 == 0) {
            row.setAttribute("class", "even");
        }
        row.appendChild(document.createTextNode(getal + " x " + i + " = " + getal*i));
        tafelDiv.appendChild(row);
    }
    tabelContainer.appendChild(tafelDiv);
}

const createTable = () => {
    tafel();
    createHeader();
}

const createHeader = (tafel) => {
    let getal = document.getElementById("tafel").value;
    let date = new Date('2025-04-01T12:10:30');
    let headerDiv = document.createElement("div");
    headerDiv.setAttribute("class", "header");

    let headerNode = document.createTextNode("Tafel van: "
    + getal + " aangemaakt op: " + date.toISOString());
    //toevoegen textnode aan header div met de inhoud van de header
    headerDiv.appendChild(headerNode);
    return headerDiv;
}
window.addEventListener("load", setup);