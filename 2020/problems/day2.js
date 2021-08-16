
String.prototype.removeCharAt = function (i){
  let array = this.split('') //Deconstruct String into Array
  array.splice(i-1,1)        //Delete chararter at position I
  return array.join('')      //Reconstruct string from array
}

function adjustInputData (inputData){

  return inputData.split('\r\n').map(row => {
    let splittedRow = row.split(':')
    let pass   = splittedRow[1].removeCharAt(1)
    let policy = splittedRow[0].split(' ')
    let character = policy[1]
    let min_max_policy = policy[0].split('-')
    let min = min_max_policy[0]
    let max = min_max_policy[1]

    return {
      'min' : min,
      'max' : max,
      'character' : character,
      'pass' : pass
    }
  })
}

const solve_part_1 = (inputData)=>{
  const data = adjustInputData(inputData)

  const okPass = data.filter( x =>{
    const aPass = x.pass.split('')
    let nFound = 0

    aPass.forEach(element => {
      if (element == x.character) nFound += 1 
    })

    let policyOk = false
    if (nFound >= x.min && nFound <= x.max ){
      policyOk = true
    }
    return policyOk
  })

  return okPass.length
}

const solve_part_2 = (inputData)=>{
  const data = adjustInputData(inputData)

  const okPass = data.filter( x =>{
    const aPass = x.pass.split('')

    let policyOk = false
    if ( ( aPass[x.min-1] == x.character || aPass[x.max-1] == x.character ) && aPass[x.max-1] != aPass[x.min-1] )
      policyOk = true
    
    return policyOk
  })

  return okPass.length
}

export { solve_part_1, solve_part_2 }