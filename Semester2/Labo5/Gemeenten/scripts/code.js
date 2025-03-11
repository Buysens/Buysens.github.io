const setup = () => {

    let gemeentes = [];
    let tekst;

    while (true) {
        tekst = prompt('Voer een gemeente in');
        if (tekst !== 'stop') {
            gemeentes.push(tekst);
        } else{
            break;
        }
    }
    const drop = document.getElementById("dropdownlijst");
    gemeentes.forEach((gemeente) => {
        drop.add(new Option(gemeente))
    })
    gemeentes.sort((a, b) => a.localeCompare(b))
    console.log(gemeentes);

}

window.addEventListener("load", setup);
