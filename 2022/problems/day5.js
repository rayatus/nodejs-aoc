export { solve_part_1, solve_part_2 }

/*
  
*/
const solve_part_1 = (inputData, inputUtils) => {

  const data = initialize(inputUtils.inputDataToLines(inputData))

  data.instructions.forEach(instruction => {
    let counter = 0
    while (counter < instruction.quantity) {
      const fromArray = data.stack[(instruction.fromStack - 1)]
      const toArray = data.stack[instruction.toStack - 1]

      toArray.unshift(fromArray.shift())

      counter++
    }
  });

  //from each element we take the 1st index resulting in an array
  //and then just join that array's values together for having an string
  return data.stack.map(x => x[0]).join('')

}

/*
  
*/
const solve_part_2 = (inputData, inputUtils) => {
  const data = initialize(inputUtils.inputDataToLines(inputData))

  data.instructions.forEach(instruction => {
    const fromArray = data.stack[instruction.fromStack - 1]
    const toArray = data.stack[instruction.toStack - 1]

    //splice() => removes/add : returns an array with the removed elements
    // 1st param index from where to add/remove
    // 2nd (optional) param number of elements to remove
    // 3rd (optional) param element's to add
    fromArray.splice(0, instruction.quantity)
      //as UNSHIFT() adds always at the beginig of the index... either we iterate ELEMENTS from END to START 
      //or we just reverse them 
      .reverse()
      //now just add at the begining of the array
      .map(x => toArray.unshift(x))

  });

  //from each element we take the 1st index resulting in an array
  //and then just join that array's values together for having an string
  return data.stack.map(x => x[0]).join('')
}


//initialize
//we do not know how many stacks are there, so let's iterate
//until there are no more lines with '[' 
//then let's parse instructions by searching 'move' keyWord
function initialize(inputData) {

  const data = {
    stack: new Array(),
    instructions: new Array()
  }

  inputData.map(row => {
    if (row.includes('[')) {
      initStack(row, data.stack);
    }
    if (row.includes('move')) {
      initInstructions(row, data.instructions);
    }
  })

  return data
}

function initInstructions(row, instructions) {
  const parsedInstructions = parseInstructions(row);
  instructions.push(parsedInstructions);
}

//at Array's top position will be the content which it is at the top of the stack
function initStack(row, stack) {
  const parsedStack = parseStack(row);
  if (stack.length == 0) {
    parsedStack.forEach(element => {
      stack.push(new Array())
    });
  }
  for (let i = 0; i < parsedStack.length; i++) {
    if (parsedStack[i] != '') {
      stack[i].push(parsedStack[i]);
    }
  }
}

// initializes instructions following pattern 'move 1 from 2 to 1'
function parseInstructions(row) {
  const aRow = row.split(' ')
  return {
    quantity: parseInt(aRow[1]),
    fromStack: parseInt(aRow[3]),
    toStack: parseInt(aRow[5])
  }
}

function parseStack(row) {

  //1st lets deconstruct STRING into ARRAY
  //2nd lets find every single CHAR in that ARRAY located at indexes where INDEX % 4 === 1 so, indexes: 1, 5, 9, ...
  //3rd delete CONDENSE 
  return [...row].filter((value, index) => index % 4 === 1).map(x => x.trim())

  /*
  This "original code" gets replaced by previous line 

  const aRow = Array.from(row)
  const aRowContent = new Array()

  let pos = 0
  let content = ''
  aRow.map(element => {
    pos += 1
    if (pos == 4) {
      aRowContent.push(content.trim())
      content = ''
      pos = 0
    } else {
      if (pos < 4) {
        content += element.replace('[', '').replace(']', '')
      }
    }
  })
  aRowContent.push(content.trim())
  return aRowContent
  */
}


