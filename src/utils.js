const views = [...document.querySelectorAll('.view-section')];

export function hideAll() {
    views.forEach(section => {
        section.style.display = 'none';
    });
}

export function showView(section) {
    hideAll();
    section.style.display = 'block';
}

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

