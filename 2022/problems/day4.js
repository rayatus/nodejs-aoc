
const GROUP_SEPARATOR = ','
const FROM_TO_SEPARATOR = '-'

function CreateGroupObject(groups, index) {
  const group = groups[index - 1]

  const Group = {
    "from": parseInt((group.split(FROM_TO_SEPARATOR)).at(0)),
    "to": parseInt((group.split(FROM_TO_SEPARATOR)).at(1)),
  }
  return Group
}

/*
  1. each row is separated by coma ',' resulting in 2 groups
  2. each group withing row defines 'from - to'  (by numbers (2-4))
  3. find in which rows one of the groups FULLY contains the other (i.e. 3-8 contains 5-6)
*/
const solve_part_1 = (inputData, inputUtils) => {

  const data = inputUtils.inputDataToLines(inputData)

  return data.filter(row => {
    const groups = row.split(GROUP_SEPARATOR)

    const group1 = CreateGroupObject(groups, 1)
    const group2 = CreateGroupObject(groups, 2)

    //Does Group1 contain Group2 or the other way arround?
    return (group1.from <= group2.from && group1.to >= group2.to) || (group2.from <= group1.from && group2.to >= group1.to)

  }).length
}

/*
  1. each row is separated by coma ',' restulting in 2 groups
  2. each group withing row defines 'from - to'  (by numbers (2-4))
  3. find in which rows one of the groups OVERLAPS contains the other (i.e. 5-7 overlaps with 7-9)
*/
const solve_part_2 = (inputData, inputUtils) => {

  const data = inputUtils.inputDataToLines(inputData)

  return data.filter(row => {
    const groups = row.split(GROUP_SEPARATOR)

    const group1 = CreateGroupObject(groups, 1)
    const group2 = CreateGroupObject(groups, 2)

    //Does Group1 overlaps Group2 or the other way arround?
    return (
      (group1.from <= group2.from && group2.from <= group1.to) ||
      (group1.from <= group2.to && group2.to <= group1.to) ||
      (group2.from <= group1.from && group1.from <= group2.to) ||
      (group2.from <= group1.to && group1.to <= group2.to)
    )

  }).length
}

export { solve_part_1, solve_part_2 }
