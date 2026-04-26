let clearButton = document.getElementById("clear-button")

let mainCanvas = document.getElementById("grid-canvas")

function createGrid(){
    for (let i =0; i < 10000; i++){
        let pix = document.createElement("div");
        pix.classList.add("pixel");
        pix.addEventListener("click", paint);
        pix.addEventListener("mouseover", function(e) {
        if (e.buttons === 1) { //very important conditional so it spots painting when you lift the click (e.buttons === 1 means left click)
        this.style.backgroundColor = chosenColor;
        }});
        pix.addEventListener("mousedown", paint)
        mainCanvas.appendChild(pix)

    }
}

createGrid()


let chosenColor = "grey"

let colorBoxes = document.querySelectorAll(".color-swatch")

for (let box of colorBoxes){
    box.addEventListener("click", function(){
        chosenColor = box.style.backgroundColor;
    })
}


function paint(){
    this.style.backgroundColor = chosenColor
}
let allOfThePixs = document.getElementsByClassName("pixel")

function clearEverything(){
    for (pixel of allOfThePixs){
        pixel.style.backgroundColor = "white"
    }

}

clearButton.addEventListener("click", clearEverything)
