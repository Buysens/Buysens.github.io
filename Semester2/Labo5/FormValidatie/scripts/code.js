const setup = () => {
    let btnValideer = document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer)
}

const valideer =() => {
    validerenVoornaam();
    validerenAchternaam();
    validerenGeboorte();
    validerenEmail();
    validerenKinderen();
}

const validerenVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let errorVoornaam = document.getElementById("errorVoornaam");
    let voornaam = txtVoornaam.value.trim();

    if(voornaam.length > 30) {
        txtVoornaam.classList.add('ongeldig');
        errorVoornaam.innerHTML = "Max. 30 Karakters Toegelaten";
    } else {
        txtVoornaam.classList.remove('ongeldig');
        errorVoornaam.innerHTML = "";
    }
}

const validerenAchternaam = () => {
    let txtAchternaam = document.getElementById("txtAchternaam");
    let errorAchternaam = document.getElementById("errorAchternaam");
    let achternaam = txtAchternaam.value.trim();

        if(achternaam.length > 50) {
            txtAchternaam.classList.add('ongeldig');
            errorAchternaam.innerHTML = "Max. 50 Karakters Toegelaten";
        } else if (achternaam.length === 0) {
            txtAchternaam.classList.add('ongeldig');
            errorAchternaam.innerHTML = "verplicht veld";
        } else {
            txtAchternaam.classList.remove('ongeldig');
            errorAchternaam.innerHTML = "";
        }
    }

    const validerenGeboorte = () => {
        let txtGeboortedatum = document.getElementById("txtGeboortedatum");
        let errorGeboortedatum = document.getElementById("errorGeboortedatum");
        let geboortedatum = txtGeboortedatum.value.trim();

        if (geboortedatum === "") {
            txtGeboortedatum.classList.add('ongeldig');
            errorGeboortedatum.innerHTML = "Verplicht Veld";
        } else if (geboortedatum[4] !== "-" || geboortedatum[7] !=="-") {
            txtGeboortedatum.classList.add('ongeldig');
            errorGeboortedatum.innerHTML = "Formaat is jjjj-mm-dd";
        }

    }

    const validerenEmail = () => {
        let txtEmail = document.getElementById("txtEmail");
        let errorEmail = document.getElementById("errorEmail");
        let email = txtEmail.value.trim();
        let index = email.indexOf('@');
        let delen = email.split('@');


        if (email === "") {
            txtEmail.classList.add('ongeldig');
            errorEmail.innerHTML = "Verplicht Veld";
        }

        if(email[index-1] === " " || email[index+1] === " ") {
            txtEmail.classList.add('ongeldig');
            errorEmail.innerHTML = "Geen Geldig Email";
        }

        if (delen.length !== 2) {
            txtEmail.classList.add('ongeldig');
            errorEmail.innerHTML = "Geen Geldig Email";
        }

    }

    const validerenKinderen = () => {
        let txtKinderen = document.getElementById("txtKinderen");
        let errorKinderen = document.getElementById("errorKinderen");
        let kinderen = txtKinderen.value.trim();
        let gtlKinderen = parseInt(kinderen, 10);

        if (gtlKinderen < 0) {
            txtKinderen.classList.add('ongeldig');
            errorKinderen.innerHTML = "Het moet een positief getal zijn";
        }

        if (gtlKinderen < 99) {
            txtKinderen.classList.add('ongeldig');
            errorKinderen.innerHTML = "error: is te vruchtbaar";
        }

    }



window.addEventListener("load", setup);