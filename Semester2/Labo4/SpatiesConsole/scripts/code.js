const setup = () => {

}

const splitText = () => {
    // Haal de tekst uit het inputveld
    let input = document.getElementById('inputText').value;

    // Maak een nieuwe string waarbij elke karakter wordt gescheiden door een spatie
    let result = '';
    for (let i = 0; i < input.length; i++) {
        result += input[i] + ' ';
    }

    // Verwijder de laatste extra spatie
    result = result.trim();

    // Toon het resultaat in de console
    console.log(result);
}
window.addEventListener("load", setup);