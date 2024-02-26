if(document.documentElement.clientWidth > 768){
    let mainSlider = document.querySelector('.service__slider');
    if(mainSlider){
        new Swiper(mainSlider ,{
            navigation: {
                nextEl: '.service__slider-next',
                prevEl: '.service__slider-prev'
            },
            pagination: {
                el: '.service__slider-pagination',
                // Буллеты
                clickable: true,
            },
            simulateTouch: false,
            slidesPerView: 1,
        });
    };
}

const iconMenu = document.querySelector('.burger');
const menuBody = document.querySelector('.header__nav');
const menuLinks = document.querySelectorAll('.header__list');
const headerLinks = document.querySelectorAll('.header__link');
const pag = document.querySelector('.service__slider-pagination');
const prevBtn = document.querySelector('.service__slider-prev');
const nextBtn = document.querySelector('.service__slider-next');

if(iconMenu){
    iconMenu.addEventListener ("click", function () {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        pag.classList.toggle('none');
        prevBtn.classList.toggle('none');
        nextBtn.classList.toggle('none');
    });
    for (let i = 0; i < headerLinks.length; i++) {
        headerLinks[i].addEventListener('click', function () {
            document.body.classList.remove('lock');
            iconMenu.classList.remove('active');
            menuBody.classList.remove('active');
            pag.classList.remove('none')
            prevBtn.classList.remove('none')
            nextBtn.classList.remove('none')
      })};
};

(function () {

    const smoothScroll = function (targetEl, duration) {
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

if(document.documentElement.clientWidth < 550){
    const benefitsSLider = document.querySelector('.benefits__slider');
    if(benefitsSLider){
        new Swiper(benefitsSLider ,{
            slidesPerView: 1.5,
            spaceBetween: 24,
        });
    };
};

if(document.documentElement.clientWidth < 834){
    const lawyersSlider = document.querySelector('.lawyers__slider');
    if(lawyersSlider){
        new Swiper(lawyersSlider ,{
            grabCursor: true,
            spaceBetween: 24,
            breakpoints: {
                320: {
                    slidesPerView: 1.5,
                },
                600: {
                    slidesPerView: 2.5,
                },
            },
        });
    };
};

const lawyersItem = document.querySelectorAll('.lawyers__slider-slide');

if(document.documentElement.clientWidth > 1024 && lawyersItem){
   lawyersItem.forEach(item => {item.addEventListener('mouseenter', () => {
        item.classList.add('show-content');
    })});
    lawyersItem.forEach(item => {item.addEventListener('mouseleave', () => {
        item.classList.remove('show-content');
    })});
};
const clientsSlider = document.querySelector('.clients__slider');
if(clientsSlider){
    new Swiper(clientsSlider ,{
        grabCursor: true,
        spaceBetween: 24,
        simulateTouch: false,
        navigation: {
            nextEl: '.clients__slider-next',
            prevEl: '.clients__slider-prev'
        },
        breakpoints: {
            320 : {
                slidesPerView: 1,
            },
            500 : {
                slidesPerView: 1.25,
            },
            1024: {
                slidesPerView: 2,
            },
        },
    });
}

const materialsSlider = document.querySelector('.materials__slider');
if(materialsSlider){
    new Swiper(materialsSlider ,{
        grabCursor: true,
        spaceBetween: 24,
        simulateTouch: false,
        breakpoints: {
            320 : {
                slidesPerView: 1.3,
            },
            500 : {
                slidesPerView: 2.1,
            },
            834: {
                slidesPerView: 3,
            },
        },
    });
}

let materialsImages = document.querySelectorAll('.materials__img');
if(materialsImages){
    let popUp = document.querySelector('.materials__pop-up');
    let popImage = document.querySelector('.materials__pop-up img');
    let popClose = document.querySelector('.materials__pop-up span');
    materialsImages.forEach(item =>{
        item.addEventListener('click', () =>{
            popUp.style.display = 'block';
            popImage.src = item.getAttribute('src');
        });
    });
    popClose.addEventListener('click', () =>{
        popUp.style.display = 'none';
    });
}