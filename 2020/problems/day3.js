function adjustInputData (inputData){
  return inputData.split('\r\n')
}

function explorePath( movement, inputData){
  let position = { x : 0, y : 0 }
  const tree = '#'
  let trees = 0

  let data = adjustInputData(inputData)

  for (position.y = movement.down ; position.y < data.length; position.y += movement.down) {
    position.x += movement.right
    const row = data[position.y].split('')

    if ( row.length <= position.x )
      position.x = position.x - row.length

    const element = row[position.x]
    if (element == tree)
      trees += 1   

  }
  return trees 
}

const solve_part_1 = (inputData)=>{
  return explorePath({ down : 1, right : 3 }, inputData)
}

const solve_part_2 = (inputData)=>{
  return explorePath({ down : 1, right : 1 }, inputData) * 
         explorePath({ down : 1, right : 3 }, inputData) *
         explorePath({ down : 1, right : 5 }, inputData) *
         explorePath({ down : 1, right : 7 }, inputData) *
         explorePath({ down : 2, right : 1 }, inputData)
  
}

export { solve_part_1, solve_part_2 }