const score1 = document.querySelector('#player1Score');
const score2 = document.querySelector('#player2Score');

const b1 = document.querySelector('#player1');
const b2 = document.querySelector('#player2');
const br = document.querySelector('#reset');

const maxScore = document.querySelector('#maxScore');

let p1 = 0;
let p2 = 0;

b1.addEventListener('click', function (e) {
    if (parseInt(maxScore.value) > p1)
        score1.innerHTML = `${++p1}`;
    if (parseInt(maxScore.value) === p1) {
        score1.style.color = 'green';
        score2.style.color = 'red';
        b1.disabled = true;
        b2.disabled = true;
    }
})

b2.addEventListener('click', function (e) {
    if (parseInt(maxScore.value) > p2)
        score2.innerHTML = `${++p2}`;
    if (parseInt(maxScore.value) === p2) {
        score2.style.color = 'green';
        score1.style.color = 'red';
        b1.disabled = true;
        b2.disabled = true;
    }
})

function changes() {
    score1.innerHTML = '0';
    score2.innerHTML = '0';
    p1 = 0;
    p2 = 0;
    b1.disabled = false;
    b2.disabled = false;
    score2.style.color = 'black';
    score1.style.color = 'black';
}
br.addEventListener('click', function (e) {
    changes()
})

maxScore.addEventListener('change', function (e) {
    changes()
})
