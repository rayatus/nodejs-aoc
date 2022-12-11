/*
  - first Col
    A => Rock 
    B => Paper
    C => Scissors
  - second Col
    X => Rock
    Y => Paper
    Z => Scissors
  
  - Points per shape
    Rock => 1pt
    Paper => 2pt
    Scissors => 3pt

  - Points per round
    Win => +6pt
    Draw => +3pt
    Lost => +0pt

    solution based on https://nisimdor.medium.com/why-we-really-need-to-stop-using-switch-statements-in-javascript-cdd0ab61ef5a
    for getting rid off so many SWITCH statements
*/
const solve_part_1 = (inputData, inputUtils) => {

  const data = inputUtils.inputDataToLines(inputData)
  let score = null

  //this object contains our score per each round possibility
  //taking into account which was our 'shape' (8)1st number) and if we won or not (second number)
  const pointsRule = {
    A: {
      X: 1 + 3,
      Y: 2 + 6,
      Z: 3 + 0
    },
    B: {
      X: 1 + 0,
      Y: 2 + 3,
      Z: 3 + 6
    },
    C: {
      X: 1 + 6,
      Y: 2 + 0,
      Z: 3 + 3
    }
  }

  //Evaluates the total points according to the given Rule with returns the total
  //points per found
  function gameEvalCreator(evalRule) {
    return function (firstCol, secondCol) {
      return evalRule[firstCol][secondCol]
    }
  }

  const gameEval = gameEvalCreator(pointsRule)
  data.map(round => {
    const aRound = round.split(' ')
    score += gameEval(aRound[0], aRound[1])
  })

  return score
}

/*

*/
const solve_part_2 = (inputData, inputUtils) => {


  return null
}

export { solve_part_1, solve_part_2 }
