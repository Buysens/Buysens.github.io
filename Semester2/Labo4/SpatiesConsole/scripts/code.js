const setup = () => {

}

const splitText = () => {
    // Haal de tekst uit het inputveld
    let input = document.getElementById('inputText').value;

    // Maak een nieuwe string waarbij elke karakter wordt gescheiden door een spatie
    let result = '';
    for (let i = 0; i < input.length; i++) {
        result += input[i] + ' ';
    }

    // Verwijder de laatste extra spatie
    result = result.trim();

    // Toon het resultaat in de console
    console.log(result);
}
window.addEventListener("load", setup);

//
// --------- Oplossing Meneer
// const setup = () => {
//     let btnToon=document.getElementById("btnToon");
//     btnToon.addEventListener("click", toon);
// };
//
// const toon = () => {
//     let txtInput=document.getElementById("txtInput");
//     let tekst=txtInput.value;
//     let tekstMetSpaties=maakMetSpaties(tekst);
//     console.log(tekstMetSpaties);
// };
//
// const maakMetSpaties = (inputText) => {
//     let result="";
//
//     for (let i=0;i<inputText.length;i++) {
//         result+=inputText.charAt(i);
//         result+=" ";}
//     return result;
// };
//
// window.addEventListener("load", setup);
//
