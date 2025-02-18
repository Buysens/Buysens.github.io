const setup = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.addEventListener("mouseover", change);

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show);

}

const change = () => {
    console.log("change");
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className ="cursus";
}

const show = () => {

    console.log("show");

    let txtName = document.getElementById("txtName");

    if (txtName.value !== "") { /* !== is een strikte vergelijking, != vergelijkt 2 waardes zonder rekening te houden
    met hun type. JavaScript probeert automatisch de types te converteren (type coercion) voordat ze worden vergeleken*/
        alert("jouw naam is " + txtName.value);


        console.log("jouw naam is " + txtName.value);
        console.log(`jouw naam is ${txtName.value}`);
    } else {
        alert("Gelieve een naam in te geven");
    }
}

window.addEventListener("load", setup);