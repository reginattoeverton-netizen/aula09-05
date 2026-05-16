const sidebarToggle = document.getElementById('sidebarToggle');
const dashboard = document.querySelector('.dashboard');

sidebarToggle.addEventListener('click', () => {
    dashboard.classList.toggle('sidebar-collapsed');
})

const darkModeToggle = document.getElementById('darkModeToggle');

if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class = "fas fa-sun"></i>'
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        darkModeToggle.innerHTML = '<i class = "fas fa-sun"></i>';
    } else {
        localStorage.setItem('dark-mode', 'enabled');
        darkModeToggle.innerHTML = '<i class = "fas fa-moon"></i>';
    }
}); 