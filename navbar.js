var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}


let MainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  MainNav.classList.toggle("active");
});
