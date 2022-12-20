const textElement = document.getElementById("text");

const testData = textElement.textContent;
//console.log(testData)

//let data = testData.replaceAll("\n", ";");
let data = testData.replace(/\s+/g, "");
//console.log(data)
//data = data.replaceAll(";;","x")
console.log(data);

function findElves() {
  let counter = 0;
  let oldX = 2;
  let points = 0;
  for (let i = 0; i < data.length; i = i + 2) {
    //   console.log(i);
    let game = data.substring(i, oldX);
    //  console.log(game);
    switch (game) {
      case "AX":
        game = game.replace("X", "Z");
        break;
      case "AY":
        game = game.replace("Y", "X");
        break;
      case "AZ":
        game = game.replace("Z", "Y");
        break;
      case "BX":
        break;
      case "BY":
        break;
      case "BZ":
        break;
      case "CX":
        game = game.replace("X", "Y");
        break;
      case "CY":
        game = game.replace("Y", "Z");
        break;
      case "CZ":
        game = game.replace("Z", "X");
        break;
    }

    //calculate the points
    switch (game) {
      case "AX":
        points = 4;
        break;
      case "AY":
        points = 8;
        break;
      case "AZ":
        points = 3;
        break;
      case "BX":
        points = 1;
        break;
      case "BY":
        points = 5;
        break;
      case "BZ":
        points = 9;
        break;
      case "CX":
        points = 7;
        break;
      case "CY":
        points = 2;
        break;
      case "CZ":
        points = 6;
        break;
    }
    counter = counter + points;
    //   console.log(counter);
    oldX = oldX + 2;
  }
  console.log(counter);
}

findElves();

/* PART 1
function findElves() {
  let counter = 0;
  let oldX = 2;
  let points = 0;
  for (let i = 0; i < data.length; i = i + 2) {
    //   console.log(i);
    let game = data.substring(i, oldX);
    //  console.log(game);
    //calculate the points
    switch (game) {
      case "AX":
        points = 4;
        break;
      case "AY":
        points = 8;
        break;
      case "AZ":
        points = 3;
        break;
      case "BX":
        points = 1;
        break;
      case "BY":
        points = 5;
        break;
      case "BZ":
        points = 9;
        break;
      case "CX":
        points = 7;
        break;
      case "CY":
        points = 2;
        break;
      case "CZ":
        points = 6;
        break;
    }
    counter = counter + points;
    //   console.log(counter);
    oldX = oldX + 2;
  }
  console.log(counter);
}

*/
