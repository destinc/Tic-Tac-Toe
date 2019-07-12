
let width = 100;
let height = 100;
let sqWidth = width / 3;
let sqHeight = height /3;
function drawBoard() {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.strokeStyle = 'rgba(243, 242, 242, 0.5)';

        ctx.beginPath();
        ctx.moveTo(sqWidth, 0);
        ctx.lineTo(sqWidth, height);
        ctx.stroke();
     
        ctx.beginPath();
        ctx.moveTo(sqWidth * 2, 0);
        ctx.lineTo(sqWidth * 2, height);
        ctx.stroke();
     
        ctx.beginPath();
        ctx.moveTo(0, sqHeight);
        ctx.lineTo(width, sqHeight);
        ctx.stroke();
     
        ctx.beginPath();
        ctx.moveTo(0, sqHeight * 2);
        ctx.lineTo(width, sqHeight * 2);
        ctx.stroke();

        
        }
}

let mapBoard = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
];

let winSequence = [
    [0, 1, 2], [3, 4, 5],
    [6, 7, 8], [0, 4, 8],
    [0, 3, 6], [1, 4, 7],
    [2, 5, 8], [2, 4, 6]
]
console.log('hello');