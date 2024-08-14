const navToggle = document.getElementById(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function(){
    links.classList.toggle('show-links');
});

button.addEventListener('mouseover', () => {
    dropdown.style.display = 'block'; 
});

button.addEventListener('mouseout', () => {
    dropdown.style.display = 'none'; 
});