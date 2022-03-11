import { showView, updateNav } from '../utils.js';
import { homePage } from './home.js';

let section = document.getElementById('form-sign-up');
let form = document.querySelector('#form-sign-up form');
form.addEventListener('submit', onSubmit);

export function registerPage() {
    showView(section);
}

async function onSubmit(event) {
    event.preventDefault();
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');
    let repeatPassword = formData.get('repeatPassword');

    await register(email, password, repeatPassword);

    updateNav();
    form.reset();
    homePage();
}

async function register(email, password, repeatPassword) {
    try {
        if ((email !== undefined && password !== undefined && repeatPassword !== undefined) && password == repeatPassword) {
            let request = await fetch('http://localhost:3030/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            if (!request.ok) {
                const error = await request.json();
                throw new Error(error.message);
            }

            const user = await request.json();
            localStorage.setItem('user', user);
        }
        else {
            throw new Error('Invalid input!')
        }
    } catch (error) {
        alert(error.message)
        throw error;
    }
}