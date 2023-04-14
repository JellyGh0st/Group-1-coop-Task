
const carousel = document.querySelector('.karus');
const korts = carousel.querySelectorAll('.kort');

const kortWidth = carousel.offsetWidth;
const kortHeight = carousel.offsetHeight;
const kortSize = kortHeight;
const kortCount = korts.length;

const radius = Math.round((kortSize/2)/ Math.tan(Math.PI / kortCount));
const kampas = 360 / kortCount;

let selectedIndex = 0;

function rotateCarousel() {
    const angle = kampas * selectedIndex * -1;
    carousel.style.transform = `translateZ(-${radius}px) rotateX(${angle}deg)`;  
    const kortIndex = selectedIndex < 0 ? (kortCount - ((selectedIndex * -1) % kortCount)) : (selectedIndex % kortCount);
}

function selectPrev() {
    selectedIndex--;
    rotateCarousel();    
}

function selectNext() {
    selectedIndex++;
    rotateCarousel();    
}

const prevButton = document.querySelector('.aukst');
prevButton.addEventListener('click', selectPrev);

const nextButton = document.querySelector('.zemyn');
nextButton.addEventListener('click', selectNext);

function initCarousel() {    
    for(let i = 0; i < korts.length; i++) {
        const kort = korts[i];
        const kortAngle = kampas * i;
        kort.style.transform = 'rotateX(' + -kortAngle + 'deg) translateZ(' + radius + 'px)';
    }

    rotateCarousel();
}

initCarousel();
