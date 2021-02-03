function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("YE");
}

//singSong();
function greet(firstName, lastName) {
    console.log(`Hey ${firstName} ${lastName[0]}. !`);
}

function repeat(string, num) {
    let str = '';
    for (let i = 0; i < num; i++) {
        str += string;
        //console.log(string);
    }
    console.log(str);
}