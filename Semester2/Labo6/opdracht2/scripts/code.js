const setup = () => {

    let list = document.getElementsByTagName('li');

    for (let i = 0; i < list.length; i++) {
        list[i].setAttribute("class", "listitem");
    }

    let pic = document.createElement("img");
    pic.setAttribute("src", "./images/Afbeelding_Trui.jpg");
    pic.setAttribute("alt", "random");
    document.querySelector("body").appendChild(pic);
}
window.addEventListener("load", setup);