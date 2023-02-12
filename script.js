let game = document.querySelector("#game");
/* for (let i = 0; i < 256; i++) {
    game.appendChild()
} */
function changeColor(){
    
}



game.style.gridTemplateColumns = `repeat(16, 1fr)`
game.style.gridTemplateRows = `repeat(16, 1fr)`
for (let i = 0; i < 16 * 16; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('grid-element')
    gridElement.addEventListener('mouseover', changeColor)
    gridElement.addEventListener('mousedown', changeColor)
    game.appendChild(gridElement)
}