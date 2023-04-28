var init = false;
let show = document.querySelector('.exp');
let eighth = document.querySelector('.swiper-slide:nth-of-type(8)');
let seventh = document.querySelector('.swiper-slide:nth-of-type(7)');
let ninth = document.querySelector('.swiper-slide:nth-of-type(9)');
let tenth = document.querySelector('.swiper-slide:nth-of-type(10)');

function swiperCard() {
    if (window.innerWidth < 768) {
        eighth.classList.remove('hidden');
        seventh.classList.remove('hidden');
        ninth.classList.remove('hidden');
        tenth.classList.remove('hidden');

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
        show.classList.add('hide');

        } else if (init) {
        swiper.destroy();
        init = false;
        show.classList.remove('hide');
    }


    else if (window.innerWidth >768 && window.innerWidth <= 1120) {
            eighth.classList.add('hidden');
            seventh.classList.add('hidden');
            ninth.classList.add('hidden');
            tenth.classList.add('hidden');
            show.innerHTML = 'Показать всё';
        show.classList.remove('collapse');
        show.classList.add('exp');
        }
    else if (window.innerWidth > 1120) {
        ninth.classList.add('hidden');
        tenth.classList.add('hidden');
        eighth.classList.remove('hidden');
        seventh.classList.remove('hidden');
        show.innerHTML = 'Показать всё';
        show.classList.remove('collapse');
        show.classList.add('exp');
    }


    }


swiperCard();
window.addEventListener("resize", swiperCard);


function myFunction() {
    show.innerHTML =
        (show.innerHTML === 'Показать всё') ? show.innerHTML = 'Скрыть' : show.innerHTML = 'Показать всё';
        show.classList.toggle('collapse');
        show.classList.toggle('exp');

    if (window.innerWidth > 1120) {
        ninth.classList.toggle('hidden');
        tenth.classList.toggle('hidden');

    }
    else if (window.innerWidth >= 768 && window.innerWidth <= 1120) {
        eighth.classList.toggle('hidden');
        seventh.classList.toggle('hidden');
        ninth.classList.toggle('hidden');
        tenth.classList.toggle('hidden');

    }
}


