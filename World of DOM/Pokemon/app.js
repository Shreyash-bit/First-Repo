// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png



let section = document.querySelector('#container');
//let source = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

for (let i = 1; i < 151; i++) {
    const pokemon = document.createElement('div');
    let source = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    const newImg = document.createElement('img');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    newImg.src = source;
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    section.appendChild(pokemon);
}
