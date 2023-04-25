let sec = document.querySelector('.section1');
let text = document.querySelector('.text');
let innerText = document.querySelector('.innerText');

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    sec.style.clipPath = `circle(${value}px at center center)`;
    text.style.left = `${100 - value / 4}%`;
    innerText.style.left = `${100 - value / 4}%`
})

