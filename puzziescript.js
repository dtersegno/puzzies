document.addEventListener('DOMContentLoaded', function() {
	const grid = document.getElementById('puzziegrid');
    const style = getComputedStyle(grid);
	const rows = parseInt(style.getPropertyValue('--no-rows'),10);
	const cols = parseInt(style.getPropertyValue('--no-columns'),10);
	const solution = [
		[0,1,1,1,0],
		[1,0,0,1,1],
		[1,0,0,1,1],
		[1,1,1,1,1],
		[0,1,1,1,0]
	];
	
	const handleCellClick = function() {
				// toggle color
				this.style.backgroundColor = this.style.backgroundColor=='black'?'white':'black';
				//check solution
				const cells = document.querySelectorAll('.cell');
				let correct = true;
				cells.forEach(function(cell) {
					const row = parseInt(cell.dataset.row, 10);
					const col = parseInt(cell.dataset.col, 10);
					const shouldBeBlack = solution[row][col] === 1;
					const isBlack = cell.style.backgroundColor == 'black';
					if (shouldBeBlack !== isBlack) {
						correct = false;
					}
				});
				if (correct) {
					cells.forEach(function(cell) {
						if (cell.style.backgroundColor == 'black') {
							cell.style.backgroundColor = 'green'
						}
						cell.removeEventListener('click', handleCellClick);
					});
				}
			};
			
			
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			const cell = document.createElement('div');
			cell.classList.add('cell');
			cell.dataset.row = i;
			cell.dataset.col = j;
			if (i !== 4) {
				cell.style.borderBottom = '1px solid white';
			};
			if (j !==4) {
				cell.style.borderRight = '1px solid white';
			};
			
			cell.addEventListener('click', handleCellClick);
			grid.appendChild(cell);
		}
	}
	
	
	
	
	const clearButton = document.getElementById('clearButton')
	clearButton.addEventListener('click', function() {
		const cells = document.querySelectorAll('.cell');
		cells.forEach(function(cell) {
			cell.style.backgroundColor = 'white';
			cell.addEventListener('click', handleCellClick);
		});
	});
});

