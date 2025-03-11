const setup = () => {
  let btnValideer = document.getElementById("btnValideer");
  btnValideer.addEventListener('click', valideer)
}

const valideer = () => {

    if(document.getElementById('roker').checked) {
        console.log("De persoon is een roker");
    } else {
        console.log("De persoon is geen roker");
    }

    let moedertaal = " ";
    let lijstMoedertalen = document.getElementsByName('taal');
    for (let i = 0; i < lijstMoedertalen.length; i++) {
        if (lijstMoedertalen[i].checked){
            moedertaal = lijstMoedertalen[i].value;
            break;
        } else {
            moedertaal = "geen keuze";
        }
    }

    let buurlandSelect = document.getElementsByName('buurland')[0];
    let buurland = buurlandSelect.options[buurlandSelect.selectedIndex].value;


    let bestellingSelect = document.getElementsByName('bestelling')[0];
    let bestelling = [];
    for(let i = 0; i < bestellingSelect.options.length; i++){
        if(bestellingSelect.options[i].selected){
            bestelling.push(bestellingSelect.options[i].value);
        }
    }

    console.log(buurland);
    console.log(moedertaal);
    console.log(bestelling);



}
window.addEventListener("load", setup);