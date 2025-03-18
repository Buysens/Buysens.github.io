const setup = () => {
    let btnTrigram = document.getElementById("btnTrigram");
    btnTrigram.addEventListener("click", makenTrigram);

}

const makenTrigram = () => {
    let trigram = [];
    let woord = document.getElementById("woord").value;
    let list = document.getElementById("lstTrigrams");

    for (let i=0; i< woord.length -2; i++) {
        let string = woord.substring(i, i+3);
        trigram.push(string);
    }

    for (let i = 0; i < trigram.length; i++) {

        list.innerHTML += "<li>" + trigram[i] + "</li>";
    }
    console.log(trigram);
}

window.addEventListener("load", setup);