export { solve_part_1, solve_part_2 }

/*
  
*/
const solve_part_1 = (inputData, inputUtils) => {
  const _GROUP = 3

  let result = null
  const data = [...inputData]

  for (let index = _GROUP; index < data.length; index++) {
    const marker = data.slice(index - _GROUP, index + 1)

    if (!hasDuplicatedElements(marker)) {
      result = index + 1
      break
    }
  }
  return result
}


/*
  
*/
const solve_part_2 = (inputData, inputUtils) => {
  return null
}


function hasDuplicatedElements(array) {
  if (array === undefined && !Array.isArray(array)) throw 'Array where to search is not provided'
  const searchArray = [...array].sort()
  for (let index = 0; index < searchArray.length - 1; index++) {
    if (searchArray[index] == searchArray[index + 1]) return true
  }
  return false
}