import { homePage } from './pages/home.js';
import { loginPage } from './pages/login.js';
import { createPage } from './pages/create.js';
import { registerPage } from './pages/register.js';
import { updateNav } from './utils.js';

let navigationElement = document.getElementById('navigation');
let createBtnElement = document.getElementById('add-movie-button');

navigationElement.addEventListener('click', onNavigate);
createBtnElement.addEventListener('click', onNavigate);

// This object holds relation between href routes and function which reveals the wanted page
let routes = {
    '/': homePage,
    '/login': loginPage,
    '/logout': logout,
    '/register': registerPage,
    '/create': createPage,
};

// Function which controls the buttons of the navigation
function onNavigate(event) {
    if (event.target.tagName == 'A' && event.target.href) {
        event.preventDefault();

        const url = new URL(event.target.href);
        const view = routes[url.pathname];

        if (typeof view == 'function') {
            view();
        }
    }
}

function logout() {
    localStorage.removeItem('user');
    updateNav();
}

// Start application at main page
updateNav();
homePage();