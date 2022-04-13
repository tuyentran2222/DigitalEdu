
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >=50 ) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


var homeSwiper = new Swiper('.home-swiper', {
    // Optional parameters
    loop: true,
    // autoplay: {
    //     delay: 5000,
    // },
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

var swiper = new Swiper(".people-comment", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

