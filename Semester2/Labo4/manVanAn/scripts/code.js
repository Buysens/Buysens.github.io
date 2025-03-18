const setup = () => {

}

const indexOf = () => {
    let tekst = "De man van An geeft geen hand aan ambetante verwanten";
    let zoektekst = "an";
    let count = 0;
    let index = tekst.indexOf(zoektekst);

    while (index !== -1) {
        count++;
        index = tekst.indexOf(zoektekst, index + 1);
    }

    console.log("Aantal keer 'an' gevonden (met indexOf):", count);
}

const lastIndex = () => {

    let tekst = "De man van An geeft geen hand aan ambetante verwanten";
    let zoektekst = "an";
    let count = 0;
    let lastindex = tekst.lastIndexOf(zoektekst);


    while (lastindex !== -1) {
        count++;
        lastindex = tekst.lastIndexOf(zoektekst, lastindex - 1);
    }

    console.log("Aantal keer 'an' gevonden (met lastIndexOf):", count);
}
window.addEventListener("load", setup);

// Oplossing Meneer
// const setup = () => {
//     let txtTekst=document.getElementById("txtTekst");
//     let tekst=txtTekst.value;
//     let txtZoekTekst=document.getElementById("txtZoekTekst");
//     let zoekTekst=txtZoekTekst.value;
//     let txtAantal=document.getElementById("txtAantal");
//
//     let aantal=telVoorkomens(tekst, zoekTekst);
//     txtAantal.textContent=aantal;
// };
//
// const telVoorkomens = (tekst, zoekTekst) => {
//     let result=0;
//     let idx=tekst.indexOf(zoekTekst);
//     while (idx!=-1) {
//         result++;
//         idx=tekst.indexOf(zoekTekst, idx+zoekTekst.length);
//     }
//     return result;
// };