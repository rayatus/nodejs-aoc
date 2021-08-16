function adjustInputData (inputData){
  return inputData.split('\r\n')
}

const solve_part_1 = (inputData)=>{
  let position = { x : 0, y : 1 }
  const movement = { down : 1, right : 3 }
  const tree = '#'
  let trees = 0

  let data = adjustInputData(inputData)

  for (position.y; position.y < data.length; position.y += movement.down) {
    position.x += movement.right
    let row = data[position.y].split('')

    let i = 0
    while ( row.length < position.x + 1 ) {
      row.push(row[i])
      i++
    } 

    const element = row[position.x]
    if (element == tree)
     trees += 1
  }
  return trees 
}

const solve_part_2 = (inputData)=>{
  let result = "this is day 3, part 2"
  return result
}

export { solve_part_1, solve_part_2 }