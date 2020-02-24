// const letters = ["a", "b", "c", "d", "e", "f", "g", "h"]
// const numbers = [1, 2, 3, 4, 5 ,6, 7, 8]
// const multiarray = []
//
// for(i=0; i<letters.length; i++){
//   for(j=0; j<numbers.length; j++){
//     multiarray.push(letters[i] + "-" + numbers[j] )
//      multiarray[multiarray.length-1]
//   }}
//   function sliceArray(list, howMany) {
//     var result = []
//     while (list[0]) {
//       result.push(list.splice(0, howMany))
//     }
//     return result
//   }
//   console.log(sliceArray(multiarray, 8))
//
// document.getElementById('butonet').addEventListener('click',
// function (){
//   document.getElementById('titol1').style.display = 'none';
// });

// document.getElementById('titol2').addEventListener('click',
// function () {
  // posem el text del element que has fet click dintre del input, utilitzem el this, perque ja estas dintre del element
  // document.getElementById('mireia').value = this.textContent;
  // si fos dun altre element, y no el que has fet click, hauries de fer un get element by id tambe
  // document.getElementById('mireia').value = document.getElementById('titol3').textContent;
// });




// create a function to count the number of times that one string is repeted:

// create variable with string
// create a emty object with two parameters
// convert this into array of letters
//make a for loop to iterate inside array
// make a function with reduce to count how many times is the letter
// return a object with this two parameters


let string = "Hello Mireia";
let array = [];
let newObject = {
  letter: [],
  repeat: 0,
}
let repeatVar = 0;

array = string.split("");

var map = array.reduce(function(prev, cur) {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});

console.log(map)
