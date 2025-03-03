const setup = () => {
    let btnTry = document.getElementById("btnTry");

    // Event-based programming
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    // eventListeners CSS
    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);
    document.getElementById("btnWithBullets").addEventListener("click", withBullets);
    document.getElementById("btnContent").addEventListener("click", changeContent);

}

const withoutBullets = () => {
    // Manier 1
    // let listItems = document.getElementsByTagName("li");
    // for (let i =0; i < listItems.length; i++) {
    //     listItems[i].style.listStyle = "none";
    //     listItems[i].style.backgroundColor = "black";
    //     listItems[i].style.color = "white";
    // }

//     Manier 2
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        // manier 2
        // listItems[i].classList = "listItemsStyleNone colorRed";

    //     manier 3
        listItems[i].classList.remove("listItemsStyleDisc");
        listItems[i].classList.remove("colorWhite");
        listItems[i].classList.add("listItemsStyleNone");
        listItems[i].classList.add("colorRed");
    }
}

const withBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for (let i =0; i < listItems.length; i++) {
        // Manier 1
        // listItems[i].style.listStyle = "disc";
        // listItems[i].style.backgroundColor = "white";
        // listItems[i].style.color = "black";
    //     manier 2
    //     listItems[i].classList = "listItemsStyleDisc colorWhite";
    //     manier 3
        listItems[i].classList.remove("listItemsStyleNone");
        listItems[i].classList.remove("colorRed");
        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorWhite");
    }
}

const changeContent = () => {
    document.getElementById("innerHTML").innerHTML ="<a href='https://www.vives.be'> Vives </a>";
    document.getElementById("textContent").textContent ="<a href='https://www.vives.be'> Vives </a>";
}

// mouseHoverFunction
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";

}

// onClickFunction
const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked!<br>";
}

// mouseOutFunction

const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>";
}

window.addEventListener("load", setup);