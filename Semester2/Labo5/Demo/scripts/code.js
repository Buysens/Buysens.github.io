const setup = () => {
    let img = document.getElementById("imgPhoto");
    img.addEventListener('mouseover', change);
}

const change = () => {
    let img = document.getElementById("imgPhoto");
    img.src = './images/Header_test.jpg';
    document.getElementById('txtText').innerHTML = "school of wheelies";
}
window.addEventListener("load", setup);