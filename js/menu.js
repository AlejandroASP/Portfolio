document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav ul');
    const toggle = document.createElement('div');
    toggle.classList.add('nav-toggle');
    toggle.innerHTML = '&#9776;';
    document.querySelector('header').appendChild(toggle);

    toggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});