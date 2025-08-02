const form = document.getElementById("save");
const list = document.getElementById("list");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const width = parseInt(document.getElementById("width").value);
    const height = parseInt(document.getElementById("height").value);
    const mines = parseInt(document.getElementById("mines").value);
    const user = document.getElementById("user").value;
    console.log(width, height, mines, user);
    await fetch("http://localhost:5144/scores", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name: user,
            width: width,
            height: height,
            bombs: mines,
        }),
    });
});

const res = await fetch("http://localhost:5144/scores");
const scores = await res.json();

for (const score of scores) {
    console.log(score);
    const user = document.createElement("li");
    user.innerText = `Name: ${score.name}, Width: ${score.width}, Height: ${score.height}, Mines: ${score.bombs}, Data: ${score.date}`
    list.appendChild(user);
}