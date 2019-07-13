window.onload = function() {
    let gameOver = false;
    let turn = 1;
    let turnTaken = [
        false, false, false,
        false, false, false,
        false, false, false
    ];

    let mark = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];

    let winner = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    let resetGame = document.getElementById("reset");
    resetGame.addEventListener("click", newGame);

    function newGame() {
        document.location.reload();
    }
}
console.log('test');