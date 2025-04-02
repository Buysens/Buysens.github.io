const setup = () => {
    let start = new Date('2025-04-01T12:10:30');
    console.log(start);

    //dag van de week - maandag 1 dinsdag 2 ,...
    console.log(start.getDay());

    //maand
    console.log(start.getMonth() +1);

    //jaar - kan met getYear maar is niet ondersteund in alle browsers
    console.log(start.getFullYear());

    //geeft de effectie dag weer
    console.log(start.getDate());

    //plaatsen van datum in bepaald formaat.
    console.log(start.getDate() + "-"
        + (start.getMonth() + 1) + "-"
        + start.getFullYear() + " " + start.getHours()
        + ":" + start.getMinutes() + ":" + start.getSeconds());

    let datum = new Date(2025,0,1);
    console.log(datum);

    //geeft de datum op je laptop is op basis van eigen tijdzone
    let event = new Date()

    console.log("toString " + event.toString());
    console.log("zonder toString " + event);

    //zonder rekening te houden met tijdzones
    console.log("toISOString " + event.toISOString());
    //datum
    console.log("toISOString " + event.toDateString());
    //tijd
    console.log("toISOString " + event.toTimeString());

    datumBerekenen();
}

const datumBerekenen = () => {
    let date = new Date();
    let verjaardag = new Date(2001,11,8);

    console.log(((((date - verjaardag)/1000)/60)/60)/24);
}
window.addEventListener("load", setup);
