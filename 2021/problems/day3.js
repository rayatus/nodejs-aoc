const solve_part_1 = (inputData, inputUtils) => {
  let gammaRate = ""
  let epsilonRate = ""

  const mostCommonBitAtIndex = function (array, index) {
    let sum = 0
    array.forEach((x) => {
      let a = parseInt(x.charAt(index))
      sum = isNaN(a) ? sum : (sum += a)
    })
    if (sum > array.length / 2) {
      return 1
    } else {
      return 0
    }
  }

  const leastCommonBitAtIndex = function (array, index) {
    let sum = 0
    array.forEach((x) => {
      let a = parseInt(x.charAt(index))
      sum = isNaN(a) ? sum : (sum += a)
    })
    if (sum > array.length / 2) {
      return 0
    } else {
      return 1
    }
  }

  const data = inputUtils.inputDataToLines(inputData)
  for (let i = 0; i < data[0].length; i++) {
    gammaRate += `${mostCommonBitAtIndex(data, i)}`
    epsilonRate += `${leastCommonBitAtIndex(data, i)}`
  }
  //convert string representing binary to a proper integer
  const gammaRateBin = parseInt(gammaRate, 2)
  const epsilonRateBin = parseInt(epsilonRate, 2)

  return gammaRateBin * epsilonRateBin
}

const solve_part_2 = (inputData, inputUtils) => {
  return undefined
}

export { solve_part_1, solve_part_2 }
