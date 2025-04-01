const setup = () => {
     let btnStart = document.getElementById('btnStart');
     btnStart.addEventListener('click', kaartenLeggen);


     let kaarten = document.getElementsByClassName("kaart");
     for(let i = 0; i < kaarten.size; i++) {
          console.log(kaarten);
          kaarten[i].addEventListener('click', toonAchterkant);
     }
}

let global = {
     AANTAL_HORIZONTAAL: 4,
     AANTAL_VERTICAAL:3,
     AANTAL_KAARTEN:6,
     IMAGE_PATH_PREFIX: 'images/',
     IMAGE_PATH_SUFFIX:'.png',
     IMAGE_SIZE: '50',
}

const kaartenLeggen = () => {
     let playField = document.getElementById('playfield');
     let kaartenLijst = [];

     for (let i = 0;  i < global.AANTAL_KAARTEN; i++) {
          kaartenLijst.push(global.IMAGE_PATH_PREFIX + "kaart" + (i+1) + global.IMAGE_PATH_SUFFIX);
     }

     let speelKaarten = [...kaartenLijst, ...kaartenLijst];
     speelKaarten.forEach((kaart) => {

          //plaatsen van de afbeelding in het grid (voorkant afbeelding)
          let img = document.createElement("img");
          img.setAttribute("src", kaart);
          img.setAttribute("alt", "kaart");
          img.setAttribute("class", "voorkant");
          img.classList.add("kaart");
          img.style.display = "none";
          playField.appendChild(img);


          //Achterkant van de kaarten genereren zodat de kaarten niet meer zichtbaar zijn
          let achterkantImg = document.createElement("img");
          achterkantImg.setAttribute("src",global.IMAGE_PATH_PREFIX + "backside" + global.IMAGE_PATH_SUFFIX);
          achterkantImg.setAttribute("alt", "achterkant");
          achterkantImg.setAttribute("class", "achterkant");
          achterkantImg.classList.add("kaart");
          playField.appendChild(achterkantImg);
     });
}

const toonAchterkant = (event) => {
    let kaart = event.currentTarget;
    let achterkant = document.getElementsByClassName("achterkant");
    let voorkant = document.getElementsByClassName("voorkant");

    kaart.classList.add("omdraaien");

     if(kaart.classList.contains("omgedraaid")){
          voorkant.style.display = "block";
          achterkant.style.display = "none";
     } else {
          voorkant.style.display = "none";
          achterkant.style.display = "block";
     }


}

window.addEventListener("load", setup);