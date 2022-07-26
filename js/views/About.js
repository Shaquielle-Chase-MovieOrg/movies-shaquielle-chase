import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";
import createView from "../createView.js";


export default function MoviesHTMLFunction(props) {
    return `
        <header>
            <h1 class="text-center">Movies</h1>
        </header>
        <a id="addMoviePlusBtn" data-link href="/add-a-movie" target="_blank">+</a>
        
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
            <button class="delBtn btn" data-id="${movie.id}"><i class="fa fa-trash"></i></button>
        </div>
    </div>`

    }
}


export function MoviesJSFunction() {

    let delButton = document.getElementsByClassName('delBtn');
    for (let i = 0; i < delButton.length; i++) {
        delButton[i].addEventListener("click", deleteMovie)


        function deleteMovie() {
            const requestOptions = {
                method: "DELETE",
            }
            const id = this.getAttribute(`data-id`)
            fetch(`https://glory-cedar-barge.glitch.me/movies/${id}`, requestOptions)
                .then(function (response) {
                    if (!response.ok) {
                        console.log("add movie error: " + response.status);
                    } else {
                        console.log("add movie ok");
                        createView("/about");
                    }
                });
        }
    }

    const user = getUser();
    if(!user) {
        showNotification("Welcome visitor", "secondary");
    } else {
        showNotification("Welcome " + user.userName, "info");
    }
}




