const setup = () => {
    let btnChangeText = document.getElementById('btnChangeText');
        btnChangeText.addEventListener("click", changeText);
}

const changeText = () => {
    let pElement=document.getElementById("txtOutput"); pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);