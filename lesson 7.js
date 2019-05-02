var matrix = [
    [0, 0, 1, 0, 0],
    [1, 0, 0, 2, 0],
    [0, 1, 2, 0, 0],
    [0, 2, 1, 0, 3],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 2, 0],
    [1, 1, 0, 0, 0]
];

var side = 120;
var grassArr = [];
var grasseaterArr = [];
var gishatichArr=[]
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y,1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grasseat = new GrassEater(x, y,2);
                grasseaterArr.push(grasseat);
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y,3);
                gishatichArr.push(gishatich);
            }
        }
    }
}

console.log(grassArr);
console.log(grasseaterArr);



function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("gray");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
        }
        for (var i in grassArr) {
            grassArr[i].mul();
        }

        for (var i in grasseaterArr) {
            grasseaterArr[i].move();
            grasseaterArr[i].eat();
            grasseaterArr[i].mul();
            grasseaterArr[i].die();
        }
        for (var i in gishatichArr) {
            gishatichArr[i].move();
            gishatichArr[i].eat();
            gishatichArr[i].mul();
            gishatichArr[i].die();
        }
    }
}
































