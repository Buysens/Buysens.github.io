const setup = () => {
    document.getElementById("btnMetBollen").addEventListener("click", function() {
        const list = document.getElementById("list");
        list.classList.remove("zonderBollen");
        list.classList.add("metBollen");
    });

    document.getElementById("btnZonderBollen").addEventListener("click", function() {
        const list = document.getElementById("list");
        list.classList.remove("metBollen");
        list.classList.add("zonderBollen");
    });
}
window.addEventListener("load", setup);