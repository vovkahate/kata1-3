var init = false;

function swiperCard() {
    if (window.innerWidth < 768) {
        if (!init) {
            init = true;
            swiper = new Swiper(".swiper", {
                direction: "horizontal",
                slidesPerView: 1.5,
                centeredSlides: true,
                spaceBetween: 45,

                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);