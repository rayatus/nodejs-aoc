const mostCommonBitAtIndex = function (array, index) {
  let sum = 0
  array.forEach((x) => {
    let a = parseInt(x.charAt(index))
    sum = isNaN(a) ? sum : (sum += a)
  })
  if (sum >= array.length / 2) {
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
  if (sum >= array.length / 2) {
    return 0
  } else {
    return 1
  }
}

const solve_part_1 = (inputData, inputUtils) => {
  let gammaRate = ""
  let epsilonRate = ""

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
  let oxigenGeneratorRating = ""
  let CO2ScrubberRating = ""

  const data = inputUtils.inputDataToLines(inputData)

  oxigenGeneratorRating = applyFilter(data, mostCommonBitAtIndex)
  CO2ScrubberRating = applyFilter(data, leastCommonBitAtIndex)

  //convert string representing binary to a proper integer
  const oxigenGeneratorRatingBin = parseInt(oxigenGeneratorRating, 2)
  const CO2ScrubberRatingBin = parseInt(CO2ScrubberRating, 2)

  return oxigenGeneratorRatingBin * CO2ScrubberRatingBin

  function applyFilter(array, filterCriteriaFunction, indexAt = 0) {
    const filterCriteria = `${filterCriteriaFunction(array, indexAt)}`
    const findings = array.filter((x) => {
      return x[indexAt] == filterCriteria
    })
    if (findings.length == 1) {
      return findings[0]
    } else {
      indexAt++
      return applyFilter(findings, filterCriteriaFunction, indexAt)
    }
  }
}

export { solve_part_1, solve_part_2 }
