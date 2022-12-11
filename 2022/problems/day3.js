/*
  1. split each line to by 2 equal length substrings
  2. find wich letter is repeated (case Sensitive)
  3. assign a value (a = 1.... z = 26, A = 27 ....Z = 52)
  4. return sum of ALL repeated letters
*/
const solve_part_1 = (inputData, inputUtils) => {
  const data = inputUtils.inputDataToLines(inputData)
  let result = null

  //let's assume that length is always PAIR
  data.map(rucksack => {

    function findRepeatedItem(left, right) {
      const aLeft = Array.from(left)
      const aRight = Array.from(right)

      for (let i = 0; i < aLeft.length; i++) {
        if (aRight.find(element => element == aLeft[i])) {
          return aLeft[i]
        }
      }
      return null
    }

    const valueRule = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 10,
      k: 11,
      l: 12,
      m: 13,
      n: 14,
      o: 15,
      p: 16,
      q: 17,
      r: 18,
      s: 19,
      t: 20,
      u: 21,
      v: 22,
      w: 23,
      x: 24,
      y: 25,
      z: 26
    }
    const getItemValue = itemValueCreator(valueRule)

    function itemValueCreator(Rule) {
      return function (item) {
        let value = Rule[item.toLowerCase()]
        const itemUpperCase = item.toUpperCase()
        if (itemUpperCase == item) { value += Object.keys(Rule).length } //counts how many "keys/attributes" has the Object
        return value
      }
    }

    const leftContainer = rucksack.slice(0, rucksack.length / 2)
    const rightContainer = rucksack.slice(rucksack.length / 2)

    const repeatedItem = findRepeatedItem(leftContainer, rightContainer)
    result += getItemValue(repeatedItem)
  })

  return result
}

/*
 

*/
const solve_part_2 = (inputData, inputUtils) => {

  return null

}

export { solve_part_1, solve_part_2 }
