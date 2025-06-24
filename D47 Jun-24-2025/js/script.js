const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slideArr = Array.from(slides);
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const dot = document.querySelectorAll('.dot');
const dotArr = Array.from(dot);

const addRemoveActiveClass = (index) => {
    slideArr.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
            dotArr[i].classList.add('active');
        } else {
            slide.classList.remove('active');
            dotArr[i].classList.remove('active');
        }
    })
}

let slideNumber = 0;
let interval = setInterval(() => {
    addRemoveActiveClass(slideNumber);
    if (slideNumber == 2) {
        slideNumber = 0;
    } else {
        slideNumber++;
    }
}, 2000)

slider.addEventListener('mouseover', () => {
    clearInterval(interval);
});

slider.addEventListener('mouseout', () => {
    interval = setInterval(() => {
        addRemoveActiveClass(slideNumber);
        if (slideNumber == 2) {
            slideNumber = 0;
        } else {
            slideNumber++;
        }
    }, 2000)
});

left.addEventListener('click', () => {
    if (slideNumber == 0) {
        slideNumber = 2;
    } else {
        slideNumber--;
    }
    addRemoveActiveClass(slideNumber);
});

right.addEventListener('click', () => {
    if (slideNumber == 2) {
        slideNumber = 0;
    } else {
        slideNumber++;
    }
    addRemoveActiveClass(slideNumber);
});

dotArr.forEach((d, i) => {
    d.addEventListener('click', () => {
        slideNumber = i;
        addRemoveActiveClass(slideNumber);
    });
});
