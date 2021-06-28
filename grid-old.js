//works, but old uncleaner version

const container = document.querySelector('.container');

function createGrid(size) {
    const total = size*size;
    const arrGrid = [];
    for (let i=0; i<total;i++){
        arrGrid.push(document.createElement('div'));
        container.appendChild(arrGrid[i]);
        arrGrid[i].style.border = '1px solid black';
    }
    //container.setAttribute('style', `display: grid; grid-template-columns: repeat(${size}, 1fr), grid-template-rows: repeat(${size}, 1fr)`);    
    container.style.display = 'grid';
    container.style.width = '500px';
    container.style.height = '500px';
    container.style.margin = '2rem auto';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    //container.style.gridTemplateRows = `grid-template-columns: repeat(${size}, auto)`;
    container.style.border = '1px solid black';
    
}

createGrid(16);
