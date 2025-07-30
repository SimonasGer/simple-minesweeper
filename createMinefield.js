const minefield = document.getElementById("minefield");
const rows = 10;
const columns = 10; //both rows and columns will be user input

for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");  
    minefield.appendChild(row);
    for (let j = 0; j < columns; j++) {
        const column = document.createElement("td");
        column.setAttribute("id", `${i}-${j}`);
        row.appendChild(column);
    }  
}