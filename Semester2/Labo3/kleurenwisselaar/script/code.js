const setup = () => {
 let btns = document.getElementsByClassName("button");

 for (let i = 0; i < btns.length; i++) {
     btns[i].addEventListener("click", () => {
         btns[i].classList.toggle("active");
     })
 }

}
window.addEventListener("load", setup);