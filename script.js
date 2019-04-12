"use strict";
let cells = document.getElementsByClassName("cell");

cells[Math.floor(Math.random() * cells.length)].id = "it";


for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", updateBG);
};

function updateBG() {
    if (this.id === "it") {
        this.classList.add("red");
        for (let j = 0; j < cells.length; j++) {
            if (cells[j].classList.contains("green")) {
                cells[j].classList.add("yellow");
            }
            cells[j].removeEventListener("click", updateBG);
        }
    } else {
        this.classList.add("green");
    }
}

console.log(cells);