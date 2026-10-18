document.addEventListener('DOMContentLoaded', function (){
	const squares = document.querySelectorAll('#board > div');
	let state = Array(9).fill(null);
	let turn = 'X';
	squares.forEach(function(square, i){
		square.classList.add('square');
		square.addEventListener('click', function (){
			state [i] =  turn;
			square.textContent = turn;
			square.classList.add(turn);
			turn = (turn === 'X') ? '0' : 'X';
		}};
	});
});

