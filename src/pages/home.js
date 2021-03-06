import { showView, spinner } from '../utils.js';
import { detailsPage } from './details.js';

let section = document.getElementById('home-page');
let movieListDivElement = section.querySelector('#movie-list');
movieListDivElement.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        event.preventDefault();

        const id = event.target.dataset.id;
        detailsPage(id);
    }
});

export function homePage() {
    showView(section);
    displayMovies();
}

async function displayMovies() {
    // Displaying a loading sign while information is received and rendered
    movieListDivElement.replaceChildren(spinner());

    // Get the movies data from the API
    const movies = await getMovies();

    // Insert movies into the DOM tree
    movieListDivElement.replaceChildren(...movies.map(createMoviePreview));
}

function createMoviePreview(movie) {
    const element = document.createElement('div');
    element.className = 'card mb-4';
    element.innerHTML = `
    <img class="card-img-top" src="${movie.img}"
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
        <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
    </div>`;

    return element;
}

async function getMovies() {
    let request = await fetch('http://localhost:3030/data/movies');
    let data = await request.json();

    return data;
}

