const container = document.querySelector("#container");

for (let index = 0; index < 16; index++) {
    const element = document.createElement("div");
    element.classList.add("square");
    container.appendChild(element);
    for (let index = 0; index < 16; index++) {
        const element = document.createElement("div");
        element.classList.add("square");
        container.appendChild(element);
        
    }
    
}

const squareDiv = document.querySelectorAll("div.square");
console.log(squareDiv);

squareDiv.forEach(element => {
    element.addEventListener("mouseover", function (event) {
        console.log("hover");
        element.style.backgroundColor = "red";
    })
});


