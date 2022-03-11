import { homePage } from './pages/home.js';
import { loginPage } from './pages/login.js';
import { createPage } from './pages/create.js';
import { registerPage } from './pages/register.js';
import { detailsPage } from './pages/details.js';
import { editPage } from './pages/edit.js';

let navigationElement = document.getElementById('navigation');
let createBtnElement = document.getElementById('add-movie-button');

navigationElement.addEventListener('click', onNavigate);
createBtnElement.addEventListener('click', onNavigate);

let routes = {
    '/': homePage,
    '/login': loginPage,
    '/logout': logout,
    '/register': registerPage,
    '/create': createPage,
    '/details': detailsPage,
    '/edit': editPage,
};

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

}

// Start application at main page
homePage();