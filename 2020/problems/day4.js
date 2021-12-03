function adjustInputData (inputData){
  return inputData.split('\r\n\r\n').map(element => { 
    return new Map( element.replace('\r\n','')
                   .split(' ')
                   .map( x => { return x.split(':')}) )
  })
}

function isValidPassport(passPort){
  let isValid = true
  //Required fields
  if ( passPort.get('byr') === undefined ) isValid = false
  if ( passPort.get('iyr') === undefined ) isValid = false
  if ( passPort.get('eyr') === undefined ) isValid = false
  if ( passPort.get('hgt') === undefined ) isValid = false
  if ( passPort.get('hcl') === undefined ) isValid = false
  if ( passPort.get('ecl') === undefined ) isValid = false
  if ( passPort.get('pid') === undefined ) isValid = false

  //Optional ones
  //if ( passPort.get('cid') === undefined )
  
  return isValid
}

const solve_part_1 = (inputData)=>{
  return adjustInputData(inputData).filter( passPort => { isValidPassport(passPort) }).length  
}

const solve_part_2 = (inputData)=>{
  return 'ToDo'
}

export { solve_part_1, solve_part_2 }