
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

    var index = 0, time = 5000;
    slides[index].classList.add('active');

    setInterval(() => {
        slides[index].classList.remove('active');

        index++;
        if (index === slides.length) index = 0;

        slides[index].classList.add('active');

    }, time);
}

var slideshows2 = document.querySelectorAll('[data-component="slideshow2"]');
slideshows2.forEach(initSlideShow2);

function initSlideShow2(slideshow2) {

    var slides2 = document.querySelectorAll(`#${slideshow2.id} [role="list"] .slide2`);

    var index = 0, time = 5000;
    slides2[index].classList.add('active');

    setInterval(() => {
        slides2[index].classList.remove('active');

        index++;
        if (index === slides2.length) index = 0;

        slides2[index].classList.add('active');

    }, time);
}