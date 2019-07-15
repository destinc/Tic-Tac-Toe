
  


function redirect() {
	window.location = 'main.html';
   }
window.onload = function() {

	let num;
	let turn = 1;

	let gameOver = false;
	let marked = [false, false, false, false, false, false, false, false, false];
	let  marks = ['', '', '', '', '', '', '', '', ''];
	let winner = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
	
	let resetGame = document.getElementById("reset");
	resetGame.addEventListener("click", newGame);
	
	function newGame() {
		document.location.reload();
	}
	
	document.getElementById("gameBoard").addEventListener("click", function(e) {
		boxClick(e.target.id);
	});
	
	function boxClick(numId) {
		let box = document.getElementById(numId);
		let ctx = box.getContext("2d");
		
		switch(numId) {
			case "canvas1": num = 1;
						    break;
			case "canvas2": num = 2;
							break;
			case "canvas3": num = 3;
							break;
			case "canvas4": num = 4;
							break;
			case "canvas5": num = 5;
							break;
			case "canvas6": num = 6;
							break;
			case "canvas7": num = 7;
							break;
			case "canvas8": num = 8;
							break;
			case "canvas9": num = 9;
							break;
		}

		if(marked[num-1] == false) {
			if(gameOver == false) {
				if(turn % 2 != 0) {
					ctx.beginPath();
					ctx.moveTo(15,15);
					ctx.lineTo(85,85);
					ctx.moveTo(85,15);
          ctx.lineTo(15,85);
          ctx.lineWidth = 10;
					ctx.strokeStyle = "rgba(243, 242, 242, 0.5)";
					ctx.stroke();
					ctx.closePath();
					marks[num-1] = 'X';

				}else {

					ctx.beginPath();
          ctx.arc(50, 50, 35, 0, 2 * Math.PI, false);
          ctx.lineWidth = 10;
					ctx.strokeStyle = "rgba(243, 242, 242, 0.5)";
					ctx.stroke();
					ctx.closePath();

					marks[num-1] = 'O';
				 }
				turn++;
                marked[num-1] = true;

                let win = marks[num - 1];
                for(i = 0; i < winner.length; i++) {
                    if((marks[winner[i][0]] == win) && (marks[winner[i][1]] == win) && (marks[winner[i][2]] == win)) {
                        document.getElementById('result').innerText = "Congrats!  '" + win + "' wins!";
                        gameOver = true;
                    }    

                }

                if(turn > 9 && gameOver != true) {
                    document.getElementById('result').innerText = "Nice Work! It's a Draw!";
                }
            }else {
                alert("Nice game! Hit reset if you'd like to play another.");
            }
        }else {
            alert("Sorry. That square is taken. Try another.")
        }   

    }
                
}