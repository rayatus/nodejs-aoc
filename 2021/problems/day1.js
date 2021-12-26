/*
 Count the number of times a depth measurement increases
*/
const solve_part_1 = (inputData, inputUtils) => {
  let prevElement
  let currentElement
  let result = 0

  const data = inputUtils.inputDataToInt(inputData)
  for (let i = 0; i < data.length; i++) {
    currentElement = data[i]
    if (prevElement !== undefined) {
      if (currentElement > prevElement) result += 1
    }
    prevElement = currentElement
  }
  return result
}

/*
 Count the number of times the sum of measurements in this sliding window increases from the previous sum
*/

function adjustInputDataPart2(inputData) {
  let Windows = []
  let Window1 = []
  let Window2 = []
  let Window3 = []
  let array1 = 0
  let array2 = -1
  let array3 = -2

  inputData.forEach((measure) => {
    if (array1 == 0) {
      Window1 = new Array()
      Windows.push(Window1)
    }

    if (array2 == 0) {
      Window2 = new Array()
      Windows.push(Window2)
    }

    if (array3 == 0) {
      Window3 = new Array()
      Windows.push(Window3)
    }

    array1++
    array2++
    array3++

    if (array1 > 0) Window1.push(measure)
    if (array2 > 0) Window2.push(measure)
    if (array3 > 0) Window3.push(measure)

    if (array1 == 3) {
      array1 = 0
    }
    if (array2 == 3) {
      array2 = 0
    }
    if (array3 == 3) {
      array3 = 0
    }
  })

  return Windows
}

const solve_part_2 = (inputData, inputUtils) => {
  let prevSum
  let result = 0

  const data = adjustInputDataPart2(inputUtils.inputDataToInt(inputData))
  data.forEach((window) => {
    let currentSum = window.reduce((total, x) => total + x)

    if (prevSum !== undefined) {
      if (currentSum > prevSum) result++
    }
    prevSum = currentSum
  })

  return result
}

export { solve_part_1, solve_part_2 }
