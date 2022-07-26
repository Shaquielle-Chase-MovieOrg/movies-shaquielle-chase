import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";


export default function MoviesHTMLFunction(props) {
    return `
        <header>
            <h1 class="text-center">Movies</h1>
        </header>
        <a data-link href="/add-movie" target="_blank" <button class="btn"> <i class="fa fa-plus"></i></button></a>
        
        <main>
            <div id="movieListContainer">
            ${makeMovieCards(props.movies)} 
            </div>
        </main>
    `;

    function makeMovieCards(movies) {
        let html = "";
        movies.forEach(function (movie){
            html += makeMovieCard(movie)
        });
        return html;
    }

    function makeMovieCard (movie){
        return `
    <div class="card">
        <div class="cardBody">
            <p>${movie.title}</p>
            <button class="btn"><i class="fa fa-pencil"></i></button>
            <button class="btn"><i class="fa fa-trash"></i></button>
        </div>
    </div>`

    }
}


export function MoviesJSFunction() {
    const user = getUser();
    if(!user) {
        showNotification("Welcome visitor", "secondary");
    } else {
        showNotification("Welcome " + user.userName, "info");
    }
}




