const views = [...document.querySelectorAll('.view-section')];

export function hideAll() {
    views.forEach(section => {
        section.style.display = 'none';
    });
}

// This function shows the current view(page) we want to see by hiding all pages and revealing the one we need
export function showView(section) {
    hideAll();
    section.style.display = 'block';
}

// This function shows the correct navigational buttons depending on looged user or guest
export function updateNav() {
    let user = JSON.parse(localStorage.getItem('user'));
    let msgContaier = document.getElementById('welcome-msg');

    if (user) {
        document.querySelectorAll('.user').forEach(e => e.style.display = 'inline-block');
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'none');
        msgContaier.textContent = `Welcome, ${user.email}`;
    } else {
        document.querySelectorAll('.user').forEach(e => e.style.display = 'none');
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'inline-block');
        msgContaier.textContent = '';
    }
}

// This is a function that displays loading of pending information
export function spinner() {
    const element = document.createElement('p');
    element.innerHTML = 'Loading &hellip;';

    return element;
}

