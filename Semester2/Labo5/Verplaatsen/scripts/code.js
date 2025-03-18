const setup = () => {

    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let zoektekst = "de";
    let vervangtekst = "het";

    let nieuwTekst = tekst.split(" ");
    for (let i = 0; i < nieuwTekst.length; i++) {
        if(nieuwTekst[i].toLowerCase() === zoektekst) {
            nieuwTekst[i] = vervangtekst;
        }
    }

    let string ="";

    for (let i = 0; i < nieuwTekst.length; i++) {
        string += nieuwTekst[i] + " ";
    }
    console.log(string);
}

window.addEventListener("load", setup);
