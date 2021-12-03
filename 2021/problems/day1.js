/*
 Count the number of times a depth measurement increases
*/
const solve_part_1 = (inputData, inputUtils)=>{
  

  let prevElement
  let currentElement
  let result = 0

  const data = inputUtils.inputDataToInt(inputData)
  for (let i = 0; i < data.length ; i++){
    currentElement = data[i]
    if (prevElement !== undefined ){
      if (currentElement > prevElement) result += 1
    }
    prevElement = currentElement
  }
  return result
}

/*
 
*/  
const solve_part_2 = (inputData)=>{
  
  

}

export { solve_part_1, solve_part_2 }