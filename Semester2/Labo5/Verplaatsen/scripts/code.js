const setup = () => {

    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let nieuweZin = tekst.replaceAll(" de ", " het ");
    console.log(tekst);
    console.log(nieuweZin);
}
window.addEventListener("load", setup);
