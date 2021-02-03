let input = prompt("input -")
const todos = ['collect chicken eggs', 'clean litter box']
while (input !== 'quit' && input !== 'q') {

    if (input === 'list') {
        console.log('*********************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('*********************')
    }
    else if (input === 'new') {
        const newTodo = prompt('what is new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    }
    else if (input === 'delete') {
        const index = parseInt(prompt('enter index to delete:'));

        const deleted = todos.splice(index, 1);
        console.log(`${deleted} deleted from the list`)
    }




    input = prompt("input -")
}
console.log("QUIT THE APP!")