const minefield = document.getElementById("minefield");
const rows = 5;
const columns = 5;

for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");  
    minefield.appendChild(row);
    for (let j = 0; j < columns; j++) {
        const column = document.createElement("td");
        column.setAttribute("id", `${i}-${j}`);
        row.appendChild(column);
    }  
}

console.log(document.getElementsByTagName("td"))