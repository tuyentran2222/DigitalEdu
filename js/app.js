import header from "./components/header.js";
import footer from "./components/footer.js";
const headerElement = document.getElementById('header');
const footerElement = document.getElementById('footer');
headerElement.innerHTML = header;
footerElement.innerHTML = footer;

const closeVideoBtn = document.getElementById('close-video');
const overlayVideo = document.getElementById('overlay');
const videoPlayIcon = document.querySelector('.video__play-icon');
console.log(videoPlayIcon)
if (videoPlayIcon) {
    videoPlayIcon.addEventListener('click', ()=> {
        overlayVideo.classList.add('show-overlay')
    })
}

if (closeVideoBtn) {
    closeVideoBtn.addEventListener('click', () => {
        overlayVideo.classList.remove('show-overlay');
    })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >=50 ) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


var homeSwiper = new Swiper('.home-swiper', {
    // Optional parameters
    loop: true,

    //auto play slide
    autoplay: {
        delay: 5000,
    },
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
const handleTogglePageButton = () => {
    let navExpand = document.getElementsByClassName('nav__expand')[0];
    navExpand.classList.toggle('active');
}

var expandButton = document.getElementById('pages-expand');
expandButton.addEventListener('click', handleTogglePageButton);
window.addEventListener('click', (e) => {
    let navExpand = document.getElementsByClassName('nav__expand')[0];
    if (!(navExpand.contains(e.target) || expandButton.contains(e.target))) {
        navExpand.classList.remove('active');
    }
})

var swiper;
if (window.innerWidth >=1000) {
    swiper = new Swiper(".people-comment", {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
}
else {
    var swiper = new Swiper(".people-comment", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
}


window.addEventListener('resize', ()=> {
    if (window.innerWidth < 1000){

        swiper = new Swiper(".people-comment", {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
        });
    }
    else {
        swiper = new Swiper(".people-comment", {
            slidesPerView: 2,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
        });
    }
})
