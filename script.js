document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game');
    const gridSize = 10; // el grid será de 10x10
    const mineCount = 20;
    let grid = [];

    function InitGame() {
        grid = Array(gridSize).fill().map(() => Array(gridSize).fill(0));
        placeMines();
        calculateMines();
        renderGame();
    }

    //colocar las minas de forma random
    function placeMines(){
        let minesPlaced = 0;
        while (minesPlaced < mineCount) {
            let row = Math.floor(Math.random() * gridSize);
            let col = Math.floor(Math.random() * gridSize);
            if (grid[row][col]=== 0) {
                grid[row][col] = 'M';
                minesPlaced++;
            }
        }
    }
    function calculateMines(){
        for (let row = 0; row < gridSize; row++){
            for(let col = 0; col < gridSize; col++){
                if(grid[row][col] === 'M') continue;
                let mines = 0;
                //para chequear todas las celdas adyacentes 
                for(let i = -1; i<= 1; i++){
                    for(let j = -1; j <= 1; j++){
                        if(i === 0 && j === 0) continue;
                        const newRow = row + i;
                        const newCol = col + j;
                        if(newRow >= 0 && newRow < gridSize && newCol >= 0 && newCol < gridSize && grid[newRow][newCol] === 'M'){
                            mines++;
                        }
                    }
                }
                grid[row][col] = mines;
            }
            
        }
    }

    function renderGame(){
        gameContainer.innerHTML = '';
        gameContainer.style.gridTemplateColumns = `repeat(${gridSize}, 40px)`;
        for(let row = 0; row < gridSize; row++){
            for(let col = 0; col < gridSize; col++){
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.addEventListener('click',() => revealCell(row, col));
                gameContainer.appendChild(cell);
            }
        }
    }

    function revealCell(row, col){
        const cellIndex = row * gridSize + col + 1;
        const cell = document.querySelector(`#game div:nth-child(${cellIndex})`);
        if(grid[row][col] === 'M'){
            cell.textContent = '💣';
            cell.style.backgroundColor ='red';
            alert('Game Over!');
        } else {
            expandCells(row,col);
        }
        cell.style.pointerEvents = 'none'; 
    }

    function expandCells(row, col){
        if(row < 0 || row >= gridSize || col < 0 || col >= gridSize) return;
        const cellIndex = row * gridSize + col + 1;
        const cell = document.querySelector(`#game div:nth-child(${cellIndex})`);
        if (cell.style.pointerEvents ==='none') return;

        cell.style.pointerEvents ='none';
        if (grid[row][col] > 0){
            cell.textContent = grid[row][col];
            cell.style.backgroundColor = '#bfbfbf';
        } else {
            cell.style.backgroundColor = '#bfbfbf';

            expandCells(row - 1, col -1);
            expandCells(row - 1, col);
            expandCells(row - 1, col +1);
            expandCells(row, col - 1);
            expandCells(row, col + 1);
            expandCells(row + 1, col -1);
            expandCells(row + 1, col);
            expandCells(row + 1, col +1);

        }
    }       
    
        InitGame();
});