

/*
  1. each row is separated by coma ',' 2 groups
  2. each group withing row defines 'from - to'  (by numbers (2-4)
  3. find in which rows one of the groups FULLY contains the other (i.e. 3-8 contains 5-6)
*/
const solve_part_1 = (inputData, inputUtils) => {

  let result = null
  const GROUP_SEPARATOR = ','
  const FROM_TO_SEPARATOR = '-'
  const data = inputUtils.inputDataToLines(inputData)

  result = data.filter(row => {
    const groups = row.split(GROUP_SEPARATOR)

    function CreateGroupObject(groups, index) {
      const group = groups[index - 1]

      const Group = {
        "from": parseInt((group.split(FROM_TO_SEPARATOR)).at(0)),
        "to": parseInt((group.split(FROM_TO_SEPARATOR)).at(1)),
      }
      return Group
    }

    const group1 = CreateGroupObject(groups, 1)
    const group2 = CreateGroupObject(groups, 2)

    //Does Group1 containe Group2 or the other way arround?
    const result = (group1.from <= group2.from && group1.to >= group2.to) || (group2.from <= group1.from && group2.to >= group1.to)
    return result
  })

  return result.length
}

/*
 
*/
const solve_part_2 = (inputData, inputUtils) => {

  let result = null
  return result

}

export { solve_part_1, solve_part_2 }
