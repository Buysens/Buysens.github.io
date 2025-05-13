// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.

const setup = () => {
    loadMovies();
}

const loadMovies = () => {
    let movieList = document.getElementById('movielist');

    movies.forEach((movie, index) => {
       let film = createElement('div', 'movie', '');
       let titel = createElement('p', 'title', movie.title);

       let thumbsUp = createIconButton('fas fa-thumbs-up', 'unset buttons',like);
       let thumbsDown = createIconButton('fas fa-thumbs-down', 'unset buttons', dislike);
       thumbsUp.setAttribute('data-id', movie.id);

       let buttonDiv = createElement('div', 'buttons');

       let image = createElement('img', 'image');
       image.setAttribute("src", movie.imageUrl);

       let description = createElement('p', 'description', movie.description);

        film.appendChild(titel);
        movieList.appendChild(film);
        film.appendChild(buttonDiv);
        buttonDiv.appendChild(thumbsUp);
        buttonDiv.appendChild(thumbsDown);
        film.appendChild(image);
        film.appendChild(description);
    });
}

const createElement = (tag, className = "", textContent = "") => {
    const el = document.createElement(tag);
    if (className) {
        className.split(" ").forEach(cls => el.classList.add(cls));
    }
    if (textContent) el.textContent = textContent;
    return el;
};

const createIconButton = (iconClass, buttonClass, onClick) => {
    const button = createElement("a", buttonClass);
    const icon = createElement("i", iconClass);
    button.appendChild(icon);
    button.addEventListener("click", onClick);
    return button;
};


const like = (event) =>{
    //op basis van event je film toevoegen aan de liked bar
    let moviebar = document.getElementById("likebarmovies");
    let likebtn = event.target.parentElement;

    //toevoegen van id om het icoontje groen te maken
    if(likebtn.classList.contains("likecounter")){
        likebtn.removeAttribute("id");
    } else {
    likebtn.setAttribute("id", "likecounter");
    }
    let likedMovie = createElement("div");

    //data id toevoegen als id om later terug te kunnen verwijderen
    likedMovie.setAttribute("id", "data-id" );


    //de elementen maken en vervolgens visible maken aan de moviesidebar
    let titlemovie = createElement("p");
    let title = document.createTextNode(movies[likebtn.getAttribute("data-id") -1].title);
    titlemovie.appendChild(title);
    likedMovie.appendChild(titlemovie);
    moviebar.appendChild(likedMovie);

    //het garbage icon toevoegen aan de titel om te kunnen verwijderen
    let garbage = createIconButton('fas fa-trash', 'unset buttons', deleteMovie);
    likedMovie.appendChild(garbage);

    //likebar visible maken
    let likebar = document.getElementById("likebar");
    likebar.style.visibility = "visible";
}

const dislike = () => {
    let dislike = event.target;

    //toevoegen van id om icoontje rood te maken
    dislike.setAttribute("id", "dislikecounter");
}

const deleteMovie = () => {
    let moviebar = document.getElementById("likebarmovies");
    let film = document.getElementById("data-id");
    moviebar.removeChild(film);
}

window.addEventListener("load", setup);