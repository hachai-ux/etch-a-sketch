//cleaner version, but not completely clean

const container = document.querySelector('.container');
let gridSize = 16;

function createGrid(size) {
    const total = size*size;
    for (let i=0; i<total;i++){
        const gridElement = document.createElement('div');
        gridElement.classList = "grid-element";
        container.appendChild(gridElement);
    }
    //container.setAttribute('style', `display: grid; grid-template-columns: repeat(${size}, 1fr), grid-template-rows: repeat(${size}, 1fr)`);    
    //setAttribute is not a best practice because it overwrites hollistically
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.width = '500px';
    container.style.height = '500px';
    container.style.margin = '2rem auto';
    container.style.border = '2px solid black';
    
}

function setHover(){
    const arrGrid = document.querySelectorAll('.grid-element');
    arrGrid.forEach((gridElement) => {
        gridElement.addEventListener('mouseenter', (e) => {
            console.log(e);
            e.target.style.background = 'black';
        });
    });
}   

function changeGrid(){
    const btn = document.querySelector('#grid-size');
    btn.addEventListener('click', () => {
    let size = window.prompt("How many squares per side?(1-100)", '');
    if (size >=1 && size <=100){
        const arrGrid = document.querySelectorAll('.grid-element');
        arrGrid.forEach((gridElement) => {
        container.removeChild(gridElement);
        });

        createGrid(size);
        setHover();

        /* const arrGrid = document.querySelectorAll('.grid-element');
            arrGrid.forEach((gridElement) => {
            gridElement.style.background = 'white';
            });
        */

    }
    else window.prompt("Enter a number between 1 and 100", '');
    
});
}

createGrid(gridSize);
setHover();
changeGrid();
