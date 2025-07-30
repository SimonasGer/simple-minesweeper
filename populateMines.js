const allSquares = [...document.getElementsByTagName("td")];
let mines = 5; //will be user input
for (let i = allSquares.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [allSquares[i], allSquares[j]] = [allSquares[j], allSquares[i]];
}

let allMines = allSquares.slice(0, mines);
console.log(allMines);

allMines.forEach(cell => {
    cell.setAttribute("isMine", "true");
})