const setup = () => {
    window.onload = function() {
        document.querySelector(document.getElementById("first")).focus();
    };
}
window.addEventListener("load", setup);