
function adjustInputData (inputData){
  return inputData.split('\r\n')
}

/*
 Let's find 2 numbers that sum 2020 and return their multiplication 
*/
const solve_part_1 = (inputData)=>{
  let data = adjustInputData(inputData)
  
  for (let i = 0; i < data.length ; i++){
    let element1 = Number(data[i])

    for (let j = i+1; j < data.length ; j++){
      let element2 = Number(data[j])

      if ( ( element1 + element2 ) == 2020 )
        return element1 * element2
    }
  }
}

/*
 Let's find 3 numbers that sum 2020 and return their multiplication
*/  
const solve_part_2 = (inputData)=>{
  
  let data = adjustInputData(inputData)

  for (let i = 0; i < data.length ; i++){
    let element1 = Number(data[i])

    for (let j = i+1; j < data.length ; j++){
      let element2 = Number(data[j])

      for (let k = j+1; k < data.length ; k++){
        let element3 = Number(data[k])

        if ( ( element1 + element2 + element3 ) == 2020 )
        return element1 * element2 * element3

      }       
    }
  } 

}

export { solve_part_1, solve_part_2 }