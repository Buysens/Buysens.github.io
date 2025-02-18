let setup =() => {
    let famillie = ["familielid 1", "familielid 2", "familielid 3",
        "familielid 4", "familielid 5"];

    console.log(famillie.length);

    for (let i = 0; i < famillie.length; i++) {
        if(i % 2 ===0) {
            console.log(famillie[i]);
        }
    }
    voegNaamToe(famillie);
    console.log(famillie.join(" - "));
}

const voegNaamToe = (leden) => {
     let naam = window.prompt("Geef een naam op");
     if (naam !==null) {
         leden.push(naam);
     }

     for (let i = 0; i < leden.length; i++) {
         console.log(leden[i]);
     }
}

window.addEventListener("load", setup);