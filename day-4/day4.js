const textElement = document.getElementById("text");

const testData = textElement.textContent;

let data = testData;

data = data.split("\n");
console.log(data);
console.log(data.length);
data = data.map(x=> x=createObjects(x));
console.log(data[2].firstN)
console.log(data[2].secondN)
console.log(data[2].thirdN)
console.log(data[2].forthN)

function createObjects(x){
let row = x.split("-");

let firstN=parseInt(row[0])
let forthN=parseInt(row[2])
let middleNumbers=row[1].split(",")
let secondN=parseInt(middleNumbers[0])
let thirdN=parseInt(middleNumbers[1])
const line = new NumbersOfLine(firstN, secondN, thirdN, forthN);
return line;
}


function NumbersOfLine(firstN, secondN, thirdN, forthN) {
  this.firstN = firstN;
  this.secondN = secondN;
  this.thirdN = thirdN;
  this.forthN = forthN;
}


function findElves() {
  let count = 0;
    for (const element of data) {
	   if (element.firstN <=element.thirdN && element.secondN >= element.forthN ) 
	   {count++
	  continue;
	  }
	 
	   if (element.firstN >=element.thirdN && element.secondN <= element.forthN ) 
	 {count++
	  continue;
	 	  }
	 	 
	 if (element.firstN <=element.thirdN && element.secondN >= element.thirdN )
	 	 {count++
	  continue;
	 	 	  }
	 	 	 
	 if (element.firstN <=element.forthN && element.secondN >= element.forthN )
	 	 {count++
	  continue;
	 	 	  }
	   

   }
  console.log(count);
}


/* FIRST PART
function findElves() {
  let count = 0;
    for (const element of data) {
	   if (element.firstN <=element.thirdN && element.secondN >= element.forthN ) 
	   {count++} else { if (element.firstN >=element.thirdN && element.secondN <= element.forthN )
   {count++}
   }
      }
  console.log(count);
}

*/

findElves();