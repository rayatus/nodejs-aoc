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




export {
  inputDataToLines,
  inputDataToInt
}