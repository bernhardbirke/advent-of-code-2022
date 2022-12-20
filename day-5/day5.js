const textElement = document.getElementById("text");
const textElement2 = document.getElementById("text2");

const testData = textElement.textContent;
let data2 = textElement2.textContent;

let data = testData;

data = data
  .replaceAll("\n", ";")
  .replaceAll(" ", ";")
  .replaceAll(";;;;", ";777;")
  .replaceAll(";;;", ";")
  .replaceAll(";;", ";");

console.log(data.length);
data = data.split(";");
data.shift();
data.pop();
console.log(data);

let arrays = [];
findArrays();

function findArrays() {
  let array1 = [];
  for (let i = 0; i < data.length; i = i + 3) {
    array1.push(data[i]);
  }
  if (array1.indexOf("777") >= 0) {
    array1.shift();
  }
  let array2 = [];
  for (let i = 1; i < data.length; i = i + 3) {
    array2.push(data[i]);
  }
  let array3 = [];
  for (let i = 2; i < data.length; i = i + 3) {
    array3.push(data[i]);
  }
  console.log(array1, array2, array3);
  arrays.push(array1);
  arrays.push(array2);
  arrays.push(array3);
}

data2 = data2.split("\n");
console.log(data2);
let lines = data2.map((x) => (x = createObjects(x)));
console.log(lines);

function createObjects(x) {
  let row = x.split(" ");
  let move = parseInt(row[1]);
  let from = parseInt(row[3]);
  let to = parseInt(row[5]);
  const line = new NumbersOfLine(move, from, to);
  return line;
}

function NumbersOfLine(move, from, to) {
  this.move = move;
  this.from = from;
  this.to = to;
}

console.log(lines[0].from);

function moveStacks() {
  for (const line of lines) {
    let arrayFrom = arrays[line.from];
    let arrayTo = arrays[line.to];
    let noStacks = line.move;
  }
}

moveStacks();
