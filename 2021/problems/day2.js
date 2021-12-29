const solve_part_1 = (inputData, inputUtils) => {
  let depth = 0
  let horizontal = 0
  const _FORWARD = "forward"
  const _UP = "up"
  const _DOWN = "down"

  const data = inputUtils.inputDataToLines(inputData)

  data.forEach((element) => {
    const movement = element.split(" ")[0]
    const magnitude = parseInt(element.split(" ")[1])

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
  let depth = 0
  let horizontal = 0
  let aim = 0

  const _AIM = "aim"
  const _FORWARD = "forward"
  const _UP = "up"
  const _DOWN = "down"

  const data = inputUtils.inputDataToLines(inputData)

  data.forEach((element) => {
    const movement = element.split(" ")[0]
    const magnitude = parseInt(element.split(" ")[1])

    switch (movement) {
      case _FORWARD:
        horizontal += magnitude
        depth += aim * magnitude
        break
      case _UP:
        aim -= magnitude
        break
      case _DOWN:
        aim += magnitude
        break
    }
  })

  return depth * horizontal
}

export { solve_part_1, solve_part_2 }
