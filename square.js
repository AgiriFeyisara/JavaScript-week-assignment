//A function that calculate the square of a number//

function calSquare(start, end) {
  let squareResult = "";
  for (let i = start; i <= end; i++) {
    let num = i;
    let square = num * num;
    squareResult += square + " ";
  }
  return squareResult;
}
let results = calSquare(5, 20);
console.log(results);
