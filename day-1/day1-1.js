
const textElement = document.getElementById("text"); 


const testData=textElement.textContent
//console.log(testData)

let data = testData.replaceAll("\n",";")
data = data.replace(/\s+/g, '')
//console.log(data)
data = data.replaceAll(";;","x")
//console.log(data)

function findElves() {
let elvesCounter=0
let oldX = 0
let allElves =[]
  for (let i = 0; i < data.length; i++) {

	if (data.charAt(i)==="x" ) {
	elvesCounter++
	let elve = data.substring(oldX,i)
	elve= elve+";"
	allElves.push(elve)
//	console.log(allElves)
	oldX=i+1
	}
  }
    let allElvesSum=[]
  for (const element of allElves) {
//  console.log(element);
  let oldY=0
  let elveSum =0
	  for (let i = 0; i < element.length; i++) {
  
	  	if (element.charAt(i)===";" ) {
	  	let elve = parseInt(element.substring(oldY,i))
	  	elveSum =elveSum+elve
	  	oldY=i+1
  	}

  }
	allElvesSum.push(elveSum)
//   console.log(allElvesSum)
//   console.log(Math.max(...allElvesSum));
  }
     console.log(Math.max(...allElvesSum));
  allElvesSum.sort(function(a, b){return b - a});
  console.log(allElvesSum[0]+allElvesSum[1]+allElvesSum[2])
    console.log(allElvesSum[1])
      console.log(allElvesSum[2])
      
}

findElves()
