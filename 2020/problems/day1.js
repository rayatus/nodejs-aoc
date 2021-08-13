
const solve_part_1 = (inputData)=>{
  let data = inputData.split('\r\n')
  
  for (let i = 0; i < data.length ; i++){
    let element1 = Number(data[i])

    for (let j = i+1; j < data.length ; j++){
      let element2 = Number(data[j])

      if ( ( element1 + element2 ) == 2020 )
        return element1 * element2
    }
  }
}

const solve_part_2 = (inputData)=>{
  return "this is day 1, part 2"
}

export { solve_part_1, solve_part_2 }