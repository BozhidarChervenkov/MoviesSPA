import { showView } from '../utils.js';
import { homePage } from './home.js';

let section = document.getElementById('add-movie');
let form = document.querySelector('#add-movie form');
form.addEventListener('submit', onSubmit);

export function createPage() {
    showView(section);
}

async function onSubmit(event) {
    event.preventDefault();

    let dataForm = new FormData(form);

    let title = dataForm.get('title');
    let description = dataForm.get('description');
    let imageUrl = dataForm.get('imageUrl');

    await createMovie(title, description, imageUrl);

    form.reset();
    homePage();
}

async function createMovie(title, description, imageUrl) {
    try {
        if (title == '' || description == '' || imageUrl == '') {
            throw new Error('Invalid input!');
        }

        const user = JSON.parse(localStorage.getItem('user'));

        let request = await fetch('http://localhost:3030/data/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': user.accessToken
            },
            body: JSON.stringify({ title, description, imageUrl })
        });
        if (!request.ok) {
            const error = await request.json();
            throw new Error(error.message);
        }
    } catch (error) {
        alert(error.message)
        throw error;
    }
}