const cells = document.getElementsByTagName("td");

const win = () => {
    if(document.getElementsByTagName("tr")) {
        document.getElementById("flags").innerText = ""
        document.getElementById("minefield").innerHTML = "";
        document.getElementById("dialog").open = true;
    }
}

const toggleFlag = (cell) => {
    if (cell.classList.contains("flagged")) {
        cell.classList.remove("flagged");
        cell.innerHTML = "";
        localStorage.setItem("flags", parseInt(localStorage.getItem("flags")) + 1);
        localStorage.setItem("squares", parseInt(localStorage.getItem("squares")) + 1);
    } else {
        if(parseInt(localStorage.getItem("flags")) === 0) {
            alert("Ran out of flags");
            return;
        }
        cell.classList.add("flagged");
        cell.innerHTML = "&#128681";
        localStorage.setItem("flags", parseInt(localStorage.getItem("flags")) - 1);
        localStorage.setItem("squares", parseInt(localStorage.getItem("squares")) - 1);
    }       
    document.getElementById("flags").innerText = `Flags remaining: ${localStorage.getItem("flags")}` 
    if (parseInt(localStorage.getItem("squares")) === 0){
        win()
    }
}

const chainReveal = (cell) => {
    if (!cell || cell.classList.contains("revealed") || cell.getAttribute("isMine") === "true" || cell.classList.contains("flagged")) {
        return
    }
    let id = cell.getAttribute("id")
    let ids = id.split("-")
    let row = parseInt(ids[0])
    let column = parseInt(ids[1])
    let tl =  document.getElementById(`${row - 1}-${column - 1}`);
    let t =  document.getElementById(`${row - 1}-${column}`);
    let tr =  document.getElementById(`${row - 1}-${column + 1}`);
    let l =  document.getElementById(`${row}-${column - 1}`);
    let r =  document.getElementById(`${row}-${column + 1}`);
    let bl =  document.getElementById(`${row + 1}-${column - 1}`);
    let b =  document.getElementById(`${row + 1}-${column}`);
    let br =  document.getElementById(`${row + 1}-${column + 1}`);
    let neighbors = [tl, t, tr, l, r, bl, b, br];
    let bombs = 0;
    for (let neighbor of neighbors) {
        if (typeof(neighbor) != "undefined" && neighbor != null && neighbor.getAttribute("isMine") === "true") {
            bombs++;
        }
    }
    cell.classList.add("revealed");
    localStorage.setItem("squares", parseInt(localStorage.getItem("squares")) - 1);
    if (parseInt(localStorage.getItem("squares")) === 0){
        win();
    }
    if (bombs > 0) {
        cell.innerText = `${bombs}`;
        return;
    }
    for (let neighbor of neighbors) {
        chainReveal(neighbor);
    }
}

const revealCell = (cell) => {
    if (cell.getAttribute("isMine") === "true") {
        alert("You lose")
    } else if (cell.classList.contains("revealed")) {
        return
    } else {
        // fun stuff
        chainReveal(cell)
    }

}


export const game = () => {
    for (let cell of cells) {
        cell.addEventListener("contextmenu", () => {
            // right click
            toggleFlag(cell);
        });

        cell.addEventListener("click", () => {
            console.log("left click")
            // left click
            revealCell(cell);
        });
        cell.addEventListener("contextmenu", (e) => {
            e.preventDefault(); // Disable right-click menu
        });
    }
}
