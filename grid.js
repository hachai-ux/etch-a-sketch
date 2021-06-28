const container = document.querySelector('.container');

function createGrid(size) {
    const total = size*size;
    for (let i=0; i<total;i++){
        const gridElement = document.createElement('div');
        gridElement.classList = "grid-element";
        container.appendChild(gridElement);
    }
    //container.setAttribute('style', `display: grid; grid-template-columns: repeat(${size}, 1fr), grid-template-rows: repeat(${size}, 1fr)`);    
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.width = '500px';
    container.style.height = '500px';
    container.style.margin = '2rem auto';

    //container.style.gridTemplateRows = `grid-template-columns: repeat(${size}, auto)`;
    container.style.border = '2px solid black';
    
}

createGrid(16);
