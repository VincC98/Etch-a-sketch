const container = document.querySelector("#container");

function createGrid(gridSize) {
    container.innerHTML = ""; // Clear the existing grid before adding a new one
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const element = document.createElement("div");
            element.classList.add("square");
            container.appendChild(element);
        }
    }
}

container.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("square")) {
        event.target.style.backgroundColor = "red";
    }
});


const button = document.querySelector("#ask-size")

button.addEventListener("click", function (event) {
    console.log("clicked");
    let gridSize = prompt("Enter the size of the grid you desire. (max 100)");
    console.log(gridSize);
    createGrid(gridSize);
    const squares = document.querySelector("div.square");
    console.log(squares);
    let square_size = 1080 / gridSize;
    document.styleSheets[0].insertRule(
        `.square { width: ${square_size}px; height: ${square_size}px; }`,
        document.styleSheets[0].cssRules.length
      );


})
