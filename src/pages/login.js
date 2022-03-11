import { showView, updateNav } from '../utils.js';
import { homePage } from './home.js';

let section = document.getElementById('form-login');
let form = document.querySelector('#form-login form');
form.addEventListener('submit', onSubmit);

export function loginPage() {
    showView(section);
}

async function onSubmit(event) {
    event.preventDefault();
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');

    await login(email, password);

    // Change the navigation, depending if the client is logged in user or guest
    updateNav();

    // Clear the form field values
    form.reset();

    // After login redirect to home page
    homePage();
}

async function login(email, password) {
    try {
        let res = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const user = await res.json();
        localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
        alert(err.message);
        throw err;
    }
}


