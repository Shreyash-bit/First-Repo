const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}
// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

const allImages = document.getElementsByTagName('img');

const squareImages = document.getElementsByClassName('square');

const links = document.querySelectorAll('p a');



// for (let img of squareImages) {
//     //console.log(img.src)
//     img.src = "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Male_Silkie.png/460px-Male_Silkie.png"
// }

// for (let link of links) {
//     console.log(link.href)
// }


const allinks = document.querySelectorAll('a');

for (let link of allinks) {
    link.style.color = 'red';
    link.style.textDecorationColor = 'blue';
}