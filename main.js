window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.header_burger').addEventListener('click', function(event) {
        document.querySelector('.header_burger').classList.toggle('active');
        document.querySelector('.menu_wrapper').classList.toggle('active');
        document.body.classList.toggle('lock');
    });
    
    document.querySelectorAll('.menu-item').forEach(function(link) {
        link.addEventListener('click', function(event) {
            document.querySelector('.header_burger').classList.remove('active');
            document.querySelector('.menu').classList.remove('active');
            document.body.classList.remove('lock');
        });
    });
})