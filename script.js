// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
let decodeArr="";
	encodedStr=encodedStr.toUpperCase();
	for(let i=0;i<encodedStr.length;i++){
		if(lookup[encodedStr[i]]){
			decodeArr+=lookup[encodedStr[i]];
		}
		else{
			decodeArr+=encodedStr[i];
		}
	}

  return decodeArr; //return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
//window.rot13 = rot13;
