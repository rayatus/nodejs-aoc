/*
 Find the elve carrying the more calories.
 Each elve info is separated from the previous one by an empty line
*/
const solve_part_1 = (inputData, inputUtils) => {

  const data = inputUtils.inputDataToInt(inputData)
  let maxCalories = null
  let elveWithMoreCalories = null

  let currentElveCalories = null
  let currentElve = 1


  data.map(snack => {

    if (!isNaN(snack)) {
      !currentElveCalories ? currentElveCalories = snack : currentElveCalories += snack
      console.debug(`Adding ${snack} calories to Elve #${currentElve}`)
    } else {
      //change elve
      console.debug(`Elve #${currentElve} had ${currentElveCalories} calories`)

      if (currentElveCalories > maxCalories) {
        console.debug(`so far it has the more calories`)
        maxCalories = currentElveCalories
        elveWithMoreCalories = currentElve
      }
      currentElveCalories = null
      currentElve++
    }
  })

  console.debug(`>>> Elve #${elveWithMoreCalories} was the one carrying up to  ${maxCalories} calories`)
  return maxCalories
}

/*
 Count the number of times the sum of measurements in this sliding window increases from the previous sum
*/


const solve_part_2 = (inputData, inputUtils) => {

  return null
}

export { solve_part_1, solve_part_2 }
