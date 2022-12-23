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

  let result = ''
  for (let index = 0; index < data.stack.length; index++) {
    const element = data.stack[index];
    result += element[0]
  }
  return result.trim()
}

/*
  
*/
const solve_part_2 = (inputData, inputUtils) => {
  return null
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
  const parsedStack = (parseStack(row));
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
function parseInstructions(row, instructions) {
  const aRow = row.split(' ')
  return {
    quantity: parseInt(aRow[1]),
    fromStack: parseInt(aRow[3]),
    toStack: parseInt(aRow[5])
  }
}

function parseStack(row, parsedStack) {
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
}


