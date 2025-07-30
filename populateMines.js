const allSquares = [...document.getElementsByTagName("td")];
let shuffledSquares = [];

function shuffle(allSquares) {
    if (allSquares.length === 0) return;
    let randomIndex = Math.floor(Math.random() * allSquares.length);
    shuffledSquares.push(allSquares[randomIndex]);
    allSquares.splice(randomIndex, 1);
    shuffle(allSquares);
}

shuffle(allSquares);
console.log(shuffledSquares);