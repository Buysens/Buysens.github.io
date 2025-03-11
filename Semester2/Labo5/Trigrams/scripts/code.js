const setup = () => {
    let btnTrigram = document.getElementById("btnTrigram");
    btnTrigram.addEventListener("click", makenTrigram);
}

const makenTrigram = () => {
    let trigram = [];
    let woord = document.getElementById("woord").value;

    for (let i=0; i< woord.length -2; i++) {
        let string = woord.substring(i, i+3);
        trigram.push(string);
    }
    console.log(trigram);
}

window.addEventListener("load", setup);