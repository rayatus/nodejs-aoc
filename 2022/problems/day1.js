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
 Find the top 3 Elves carrying the more calories.
*/
const solve_part_2 = (inputData, inputUtils) => {

  const data = inputUtils.inputDataToInt(inputData)
  let aElvesWithCalories = []
  let currentElveCalories = null


  data.map(snack => {

    if (!isNaN(snack)) {
      !currentElveCalories ? currentElveCalories = snack : currentElveCalories += snack
    } else {
      //change elve
      aElvesWithCalories.push(currentElveCalories)
      currentElveCalories = null
    }
  })

  //Last Elve
  if (currentElveCalories !== null) aElvesWithCalories.push(currentElveCalories)

  //sort Array of elves
  aElvesWithCalories.sort((a, b) => {
    return a - b
    /*
    return a - b => Same as following  (only for sorting numbers)  
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    // a must be equal to b
    return 0;
    */
  }).reverse() //reverse order for having it in DESCENDING

  //sumarize top 3 Elves
  let maxCalories = null
  for (let i = 0; i < 3; i++) {
    !maxCalories ? maxCalories = aElvesWithCalories[i] : maxCalories += aElvesWithCalories[i]
  }

  return maxCalories
}

export { solve_part_1, solve_part_2 }
