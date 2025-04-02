const setup = () => {
    let btnStart = document.getElementById('btnStart');
    btnStart.addEventListener('click', spelen);

  global.timeoutId = setInterval(() => {
      verplaatsenImg();}, global.MOVE_DELAY);
};

let global = {
    IMAGE_COUNT:5, //aantal afbeeldingen
    IMAGE_SIZE: 48, //grootte van de figuur
    IMAGE_PATH_PREFIX: 'images/', //map van de figuren
    IMAGE_PATH_SUFFIX:'.png', //extensie van de figuren

    MOVE_DELAY:5000, //aantal milliseconden voor wanneer nieuwe afbeelding getoond wordt

    score:0, // het aantal hits
    timeoutId:0 //id van de timeout timer zodat we die kunnen annuleren
};

const changeImage = () => {
    let img = document.getElementById('afbeelding');
    let random = Math.floor(Math.random()*global.IMAGE_COUNT);

    img.setAttribute("src", global.IMAGE_PATH_PREFIX + random + global.IMAGE_PATH_SUFFIX);

    if(random === 0) {
        img.setAttribute("alt", "bom");
    } else {
        img.setAttribute("alt", "target");
    }
}

const verplaatsenImg = () => {
    let img = document.getElementById('afbeelding');
    let veld = document.getElementById('playField');
    let max = veld.clientWidth - img.offsetWidth;
    let height =  veld.clientHeight - img.offsetHeight;

    let positieBreedte = Math.floor(Math.random()*max);
    let positieHoogte = Math.floor(Math.random()*height);
    img.style.left = positieBreedte + "px";
    img.style.top = positieHoogte + "px";
}

const randomImg = () => {
    let img = Math.floor(Math.random()*(global.IMAGE_COUNT -1)) +1;
    return global.IMAGE_PATH_PREFIX + img + global.IMAGE_PATH_SUFFIX;
}

const spelen = () => {
    global.score = 0;
    let speelveld = document.getElementById("playField");
    speelveld.innerHTML = "";

    let newDiv = document.createElement("div");
    newDiv.classList.add("playField");

    let nextImg = document.createElement('img');
    nextImg.setAttribute('src', randomImg());
    nextImg.setAttribute('alt', 'target');
    nextImg.setAttribute('id', 'afbeelding');

    newDiv.appendChild(nextImg);
    speelveld.appendChild(nextImg);

    let afbeelding = document.getElementById('afbeelding');
    afbeelding.addEventListener('click', () => {
        if(afbeelding.getAttribute('alt') === "bom" ){
            alert("Game over, je hebt op een bom geklikt. \nJe hebt een score van "+ global.score);
            //dit is om de game te doen stoppen
            clearTimeout(global.timeoutId);
        } else {
            global.score++;
            verplaatsenImg();
            changeImage();
        }
    });

}

window.addEventListener("load", setup);


