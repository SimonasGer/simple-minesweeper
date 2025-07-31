export const populateMines = (mines) => {
    const allSquares = [...document.getElementsByTagName("td")];
    for (let i = allSquares.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [allSquares[i], allSquares[j]] = [allSquares[j], allSquares[i]];
    }

    let allMines = allSquares.slice(0, mines);

    allMines.forEach(cell => {
        cell.setAttribute("isMine", "true");
    });
}