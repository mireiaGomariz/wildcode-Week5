const letters = ["a", "b", "c", "d", "e", "f", "g", "h"]
const numbers = [1, 2, 3, 4, 5 ,6, 7, 8]
const multiarray = []

for(i=0; i<letters.length; i++){
  for(j=0; j<numbers.length; j++){
    multiarray.push(letters[i] + "-" + numbers[j] )
     multiarray[multiarray.length-1]
  }}
  function sliceArray(list, howMany) {
    var result = []
    while (list[0]) {
      result.push(list.splice(0, howMany))
    }
    return result
  }
  console.log(sliceArray(multiarray, 8))
