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