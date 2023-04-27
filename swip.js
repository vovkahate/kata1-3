var init = false;
let pokaz = document.querySelector('.exp');


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
        pokaz.classList.add('hide');

    } else if (init) {
        swiper.destroy();
        init = false;
        pokaz.classList.remove('hide');
    }
}



swiperCard();
window.addEventListener("resize", swiperCard);


let eighth = document.querySelector('.swiper-slide:nth-of-type(8)');
let seventh = document.querySelector('.swiper-slide:nth-of-type(7)');




function myFunction() {
    pokaz.innerHTML =
        (pokaz.innerHTML === 'Показать всё') ? pokaz.innerHTML = 'Скрыть' : pokaz.innerHTML = 'Показать всё';
    pokaz.classList.toggle('collapse');
    pokaz.classList.toggle('exp');
    eighth.classList.toggle('hidden');
    seventh.classList.toggle('hidden');
}

