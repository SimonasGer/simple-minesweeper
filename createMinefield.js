import { populateMines } from "./populateMines.js";
import { game } from "./revealingAndFlagging.js";
const minefield = document.getElementById("minefield");
const form = document.getElementById("form");
const error = document.getElementById("error")

const createField = (width, height) => {
    for (let i = 0; i < height; i++) {
        const row = document.createElement("tr");  
        minefield.appendChild(row);
        for (let j = 0; j < width; j++) {
            const column = document.createElement("td");
            column.setAttribute("id", `${i}-${j}`);
            row.appendChild(column);
        }  
    }   
}

const createMinefield = (width, height, mines) => {
    createField(width, height);
    populateMines(mines);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(document.getElementsByTagName("tr")){
        minefield.innerHTML = "";
    }
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const mines = document.getElementById("mines").value;
    if (width <= 0 || height <= 0 || mines <= 0) {
        error.innerHTML = "All fields must be positive numbers and not null";
    } else if (width > 50 || height > 50) {
        error.innerHTML = "Minefield too big";
    } else if (mines > height * width) {
        error.innerHTML = "Too many mines";
    } else {
        error.innerHTML = "";
        createMinefield(width, height, mines)
        game();
        localStorage.setItem("flags", mines);
        localStorage.setItem("squares", width * height);
        document.getElementById("flags").innerText = `Flags remaining: ${mines}`;
    }

});