const solve_part_1 = (inputData, inputUtils) => {
  let depth = 0
  let horizontal = 0
  const _FORWARD = "forward"
  const _UP = "up"
  const _DOWN = "down"

  const data = inputUtils.inputDataToLines(inputData)

  data.forEach((element) => {
    const instructions = element.split(" ")
    const movement = instructions[0]
    const magnitude = parseInt(instructions[1])

    switch (movement) {
      case _FORWARD:
        horizontal += magnitude
        break
      case _UP:
        depth -= magnitude
        break
      case _DOWN:
        depth += magnitude
        break
    }
  })

  return depth * horizontal
}

const solve_part_2 = (inputData, inputUtils) => {
  let result
  return result
}

export { solve_part_1, solve_part_2 }
