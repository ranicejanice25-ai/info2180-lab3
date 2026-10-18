document.addEventListener('DOMContentLoaded', function (){
	const squares = document.querySelectorAll('#board > div');
	const status = document.getElementById('status');
	const defaultMessage = status.textContent;
	let state = Array(9).fill(null);
	let turn = 'X';
		
	const wins = [
		[0,1,2],[3,4,5],[6,7,8],
		[0,3,6],[1,4,7],[2,5,8],
		[0,4,8],[2,4,6]
	];
	function checkWinner(){
		for (const [a,b,c] of wins){
			if (state[a] && state[a] === state[b] && state[a] === state[c]){
				status.textContent = 'Congratulations! ' + state[a] + ' is the Winner!';
				status.classList.add('you-won');
			}
		}
	}
		
	squares.forEach(function(square, i){
		square.classList.add('square');
		square.addEventListener('click', function (){
			if (state[i]) return;
			state [i] =  turn;
			square.textContent = turn;
			square.classList.add(turn);
			checkWinner();
			turn = (turn === 'X') ? '0' : 'X';
		}};
		
		square.addEventListener('mouseover', function () { square.classList.add('hover'); });
		square.addEventListener('mouseout', function () {square.classList.remove('hover'); });
	});
	
	document.querySelector('.btn').addEventListener('click', function (){
		state = Array(9).fill(null);		
		turn = 'X';
		squares.forEach(function(square){
			square.textContent ='';
			square.className = 'square';
		});
	status.textContent = defaultMessage;
	status.classList.remove('you-won');
	});
});

