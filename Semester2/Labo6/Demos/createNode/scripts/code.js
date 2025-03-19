const setup = () => {

    let element = document.createElement("p"); //maken van een element
    element.setAttribute("class", "color");
    element.setAttribute("id", "txtPar");

    console.log(element.getAttribute("class"));

    let txtNode = document.createTextNode("Hello World");
    element.appendChild(txtNode);
    document.querySelector("#myDiv").appendChild(element);
}
window.addEventListener("load", setup);