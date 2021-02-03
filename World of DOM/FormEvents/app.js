// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.addEventListener('click', function () {
//         li.remove();
//     })
// }

const tweetForm = document.querySelector("#tweetForm");
const tweetContainer = document.querySelector('ul');
tweetForm.addEventListener('submit', function (ev) {
    ev.preventDefault();
    //const usernameInput = document.querySelectorAll('input')[0];
    //const tweetInput = document.querySelectorAll('input')[1];
    //console.log(usernameInput.value, tweetInput.value);

    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';

})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetContainer.append(newTweet);
}

tweetContainer.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
    //e.target.remove();
})