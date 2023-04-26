var init = false;
let pokaz = document.querySelector('.exp');
let hideButton = document.querySelector('.collapse');

// const page = document.querySelector('.card:nth-child(7)');
// const page2 = document.querySelector('.card:nth-child(8)');

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


let third = document.querySelector('.swiper-slide:nth-of-type(8)');
let seventh = document.querySelector('.swiper-slide:nth-of-type(7)');

pokaz.onclick = function() {
    // page.classList.toggle('less');
    // page2.classList.toggle('less');
    // hideButton.classList.toggle('show');
    // themeButton.classList.toggle('less');
    pokaz.classList.toggle('hide');
    third.style.display = "block";
    seventh.style.display = "block";
    hideButton.style.display = "block";

}
hideButton.onclick = function() {
    // page.classList.toggle('less');
    // page2.classList.toggle('less');
    // hideButton.classList.toggle('show');
   //  themeButton.classList.toggle('less');
    third.style.display = "none";
    seventh.style.display = "none";
    pokaz.classList.toggle('hide');
    hideButton.style.display = "";




}


