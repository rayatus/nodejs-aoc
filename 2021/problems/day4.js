class BingoNumber {
  #number = 0
  #marked = false
  #bingoRow = new BingoNumberArray()
  #bingoCol = new BingoNumberArray()

  constructor(number) {
    this.#isNumberValid(number)
    this.#number = parseInt(number)
  }
  get number() {
    return this.#number
  }
  set number(number) {
    this.#isNumberValid(number)
    this.#number = parseInt(number)
  }
  mark() {
    this.#marked = true
  }
  isMarked() {
    return this.#marked
  }
  set bingoRow(bingoRow) {
    if (bingoRow instanceof BingoNumberArray) {
      this.#bingoRow = bingoRow
      this.#bingoRow.addNumber(this)
    } else {
      throw `input parameter is not a BingoNumberArray`
    }
  }
  set bingoCol(bingoCol) {
    if (bingoCol instanceof BingoNumberArray) {
      this.#bingoCol = bingoCol
      this.#bingoCol.addNumber(this)
    } else {
      throw `input parameter is not a BingoNumberArray`
    }
  }
  get bingoRow() {
    return this.#bingoRow
  }
  get bingoCol() {
    return this.#bingoCol
  }

  #isNumberValid(number) {
    if (isNaN(number)) {
      throw `${number} is not a number`
    }
  }
}

class BingoNumberArray {
  #numbers = new Array()

  addNumber(bingoNumber) {
    if (!(bingoNumber instanceof BingoNumber)) throw `${bingoNumber} is not an instance of BingoNumber`
    this.#numbers.push(bingoNumber)
  }
  getLength() {
    return this.#numbers.length
  }

  getNumberAt(index = 0) {
    return this.#numbers[index]
  }
  isComplete() {
    const markedNumbers = this.#numbers.filter((bingoNumber) => {
      return bingoNumber.isMarked()
    })
    return markedNumbers.length == this.getLength() ? true : false
  }
}

class BingoCard {
  #rows = new Array()
  #cols = new Array()
  #numbers = new Array()
  #id = 0
  static #cardId = 0

  //Create board by specifying the numbers in a two dimensional array (RowsxCols)
  constructor(inputArray) {
    this.#id = BingoCard.#cardId++

    for (let i = 0; i < inputArray.length; i++) {
      const row = new BingoNumberArray()
      this.#rows.push(row)

      const inputRow = inputArray[i]

      for (let j = 0; j < inputRow.length; j++) {
        let col = this.#cols[j]
        if (col === undefined) {
          col = new BingoNumberArray()
          this.#cols.push(col)
        }
        const number = new BingoNumber(inputRow[j])
        this.#numbers.push(number)
        number.bingoCol = row
        number.bingoRow = col
      }
    }
  }

  check(number = undefined, bingoWinCallBack) {
    let exit = false
    if (isNaN(number)) throw `${number} is not an number`

    //Iterate through the board and mark that number provided

    for (let i = 0; i < this.#rows.length && exit == false; i++) {
      const row = this.#rows[i]
      for (let j = 0; j < row.getLength() && exit == false; j++) {
        const bingoNumber = row.getNumberAt(j)
        if (bingoNumber.number == number) {
          bingoNumber.mark()

          //Is the col/row completed?
          if (bingoNumber.bingoRow.isComplete() || bingoNumber.bingoCol.isComplete()) {
            bingoWinCallBack(this)
            exit = true
          }
        }
      }
    }
  }

  getScore() {
    const nonMarkedNumbers = this.#numbers.filter((number) => !number.isMarked())
    let score = 0
    nonMarkedNumbers.forEach((bingoNumber) => (score += parseInt(bingoNumber.number)))
    return score
  }
}

const parseInputData = function (data) {
  //First line contains the numbers separated by ',' to check and after every empty line
  //it comes some lines that represent each Bingo Card where each number is separated by SPACE/S
  let parsedData = {
    numbers: new Array(),
    cards: new Array(),
  }

  parsedData.numbers = data[0].trim().split(",")
  let card

  for (let i = 1; i < data.length; i++) {
    const element = data[i]
    if (element == "") {
      if (card !== undefined) {
        parsedData.cards.push(new BingoCard(card))
      }
      card = new Array()
    } else {
      const row = element.trim().split(" ")
      card.push(row.filter((x) => x != ""))
    }
  }

  if (card !== undefined) {
    parsedData.cards.push(new BingoCard(card))
  }

  return parsedData
}

const solve_part_1 = (inputData, inputUtils) => {
  const parsedData = parseInputData(inputUtils.inputDataToLines(inputData))
  //Let's check each number in all BingoCards
  let result = undefined
  for (let i = 0; i < parsedData.numbers.length && result === undefined; i++) {
    const number = parsedData.numbers[i]
    for (let j = 0; j < parsedData.cards.length && result === undefined; j++) {
      const bingoCard = parsedData.cards[j]
      bingoCard.check(number, (bingoCard) => {
        result = bingoCard.getScore() * number
      })
    }
  }

  return result
}
const solve_part_2 = (inputData, inputUtils) => {
  return undefined
}

export { solve_part_1, solve_part_2 }
