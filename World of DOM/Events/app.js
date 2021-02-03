const btn = document.querySelector('#v2');
btn.onclick = function () {
    console.log('Clicked Second Button');
}
function scream() {
    console.log('stop that thing!');
}
btn.onmouseenter = scream;

const h1 = document.querySelector('h1');
h1.onmouseenter = scream;

const btn3 = document.querySelector('#v3');
btn3.addEventListener('dblclick', function () {
    alert('clicked!')
})