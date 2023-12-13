const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

let swiperCards = new Swiper('.card__content', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    },
});


toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

var slideIndex = 1;
showSlides(slideIndex);

var autoSlideInterval = setInterval(function () {
    plusSlides(1);
}, 2000);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

document.querySelector('.slides').addEventListener('mouseover', function () {
    clearInterval(autoSlideInterval);
});

document.querySelector('.slides').addEventListener('mouseout', function () {
    autoSlideInterval = setInterval(function () {
        plusSlides(1);
    }, 3000);
});
