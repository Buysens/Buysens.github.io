const setup = () => {
    let aantallen = document.getElementsByClassName("aantallen");

    for (let i = 0; i < aantallen; i++) {
        aantallen[i].addEventListener("change", update)
    }

}

const update = () => {
    let txtBtws = document.getElementsByClassName("txtBtw");
}
window.addEventListener("load", setup);