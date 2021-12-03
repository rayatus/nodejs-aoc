/*
Converts inputData into a list of lines
*/
function inputDataToLines (inputData){
  return inputData.split('\r\n')
}

/*
Converts inputData into a list of Integers
*/
function inputDataToInt (inputData){
  return inputDataToLines(inputData).map(x => parseInt(x))
}
/*
Removes char at index
*/
String.prototype.removeCharAt = function (i){
  let array = this.split('') //Deconstruct String into Array
  array.splice(i-1,1)        //Delete chararter at position I
  return array.join('')      //Reconstruct string from array
}



export {
  inputDataToLines,
  inputDataToInt,
  removeCharAt
}