const setup = () => {
    let button = document.getElementById("btn");
    let myDiv = document.getElementById("myDIV");

    button.addEventListener("click", () => {
        let p = document.createElement("p");
        p.textContent = "let p = document.createElement('p');"
        document.getElementById("myDIV").appendChild(p);
    });
};

window.addEventListener("load", setup);