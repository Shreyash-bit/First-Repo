const cbtn = document.querySelector('#btn');
const ch = document.querySelector('#h');
const bg = cbtn.parentElement;

cbtn.align = 'center';
ch.align = 'center';

function randomNum() {
    return (Math.random() * 255);
}
function changeColor() {
    let r = 0; let g = 0; let b = 0;
    r = randomNum();
    g = randomNum();
    b = randomNum();
    ch.innerHTML = `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
    bg.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

cbtn.addEventListener('click', changeColor);