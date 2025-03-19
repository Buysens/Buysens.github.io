const setup = () => {
    let selection = document.getElementById("selection");
    selection.addEventListener("change", toonAfbeelding);
}
const toonAfbeelding = () => {
    let img = document.getElementById("img");
    let selection = document.getElementById("selection").value;
    let note = document.getElementById("note");

    if (selection === "kies") {
        img.classList.add("hidden");
        note.innerHTML = " ";
    } else if (selection === "zonder ei") {
        img.classList.remove("hidden");
        note.innerHTML = "Hierboven een kip zonder een ei"
    } else {
        img.classList.add("with-egg");
        img.classList.remove("hidden");        note.innerHTML = "Hierboven een kip met een ei"
    }
    tellenZin()
}

    const tellenZin = () => {
        let list = [];
        let tekst = document.getElementById("note").value;
        let zoektekst = document.getElementById("txtVak").value;
        let count = 0;
        let note = document.getElementById("note");

        for (let i=0; i< tekst.length; i++) {
            let string = tekst.substring(i, i+1);
            list.push(string);
        }

        for (let i = 0; i < list.length; i++) {
            if (list[i] === zoektekst) {
                count++;
            }
        }

        note.innerHTML += "\nDe letter " + tekst + " komt " + count + " voor." ;
    }


window.addEventListener("load", setup);