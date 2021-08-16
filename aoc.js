/*--------------------------------------------------------------------------------

    ~~~~ Advents of Code solved in NodeJS for learning purposes ~~~~

--------------------------------------------------------------------------------*/

import fs from 'fs'
import minimist from 'minimist'

const _YEAR_NOT_DEFINED = -1
const _DAY_NOT_DEFINED  = -1
const _PART_NOT_DEFINED = -1

const args = minimist(process.argv.slice(2))
let yearToRun = args["year"] || _YEAR_NOT_DEFINED
let dayToRun  = args["day"]  || _DAY_NOT_DEFINED
let part      = args["part"] || _PART_NOT_DEFINED

//Check if arguments are correct
if ( ( yearToRun != _YEAR_NOT_DEFINED  && isValidYear(yearToRun) == false ) 
  || ( dayToRun  != _DAY_NOT_DEFINED   && isValidDay(dayToRun)   == false ) 
  || ( part      != _PART_NOT_DEFINED  && isValidPart(part)      == false ) ) {
  showDocumentation() 
} else {
  await executeAoC(yearToRun, dayToRun, part)
}


//Executes corresponding exercices
async function executeAoC(yearToRun, dayToRun, part) {
  const dir = await fs.promises.opendir('./');
  for await (const dirent of dir) {
    if ( isValidYear(dirent.name) == true && (dirent.name == yearToRun || yearToRun == _YEAR_NOT_DEFINED ) ){
      console.log(`Executing problems from AoC ${dirent.name}`)

      let yearFolder     = `./${dirent.name}`
      let problemFolder  = `${yearFolder}/problems`
      let inputFolder    = `${yearFolder}/input`

      fs.readdir(problemFolder, (err, files) => {
        if (err){
          console.error(`Error while reading contents of path:${path}`)
          console.error(err)
        }else{
          files.forEach( problemFile => {

            let day           = problemFile.slice(3,-3)  // day1.js ==> 1
            let inputFilename = problemFile.slice(0,-3)  // day1.js ==> day1
            let inputPath     = `${inputFolder}/${inputFilename}`

            if ( isValidDay(day) && ( day == dayToRun || dayToRun == _DAY_NOT_DEFINED ) )
              fs.readFile(inputPath, 'utf8', (err, inputData) => {
                if (err){
                  console.error(`Error while reading contents of input file:${inputPath}`)
                  console.error(err)
                }else{
                  run( `${problemFolder}/${problemFile}`, part, inputData )
                }                
              })
          })
        }
      })
    }
  }
}

//Imports the solutions for the given year/Day
async function getAoCModule(modulePath){
    
  try{
     const aocModule = await import(modulePath)
     return aocModule
  } catch (error) {
    console.error(`Something wrong happend while importing package '${modulePath}' : ${error}`)
  } 
}

//Executes corresponding part, or both, for a given day of the given year
async function run(modulePath, part, input){
 
  try{
    const aocModule = await getAoCModule(modulePath)
    
    console.log(`Solving ${modulePath}`)
    if (part == 1 || part == _PART_NOT_DEFINED){
      console.log('Solving part 1')
      const result1 = aocModule.solve_part_1(input)
      console.log(`Solution for part 1 => ${result1}`)
    }
    if (part == 2 || part == _PART_NOT_DEFINED){
      console.log('Solving part 2')
      const result2 = aocModule.solve_part_2(input)
      console.log(`Solution for part 2 => ${result2}`)
    }
        
  } catch (error) {
    console.error(`Something wrong happend while executing solutions for '${modulePath}', part='${part}' : ${error}`)
  } 
}

//Verifies if a given Year has a correct value
function isValidYear(year){
  let isValid = false
  if ( isNaN(year) == true ) return isValidPart
  if ( ( year >= 2020 && year <= 9999 ) ) isValid = true
  return isValid
}

//Verifies if a given Day has a correct value
function isValidDay(day){
  let isValid = false
  if ( isNaN(day) == true ) return isValidPart
  if ( ( day > 0 && day <= 31 ) ) isValid = true
  return isValid
}

//Verifies if a given Part has a correct value
function isValidPart(part){
  let isValid = false
  if ( isNaN(part) == true ) return isValidPart
  if ( ( part > 0 && part < 3 ) )  isValid = true
  return isValid
}

//Returns appDocumentation
function showDocumentation(){
  console.log(" Please execute it as: aoc.js --year --day --part")
  console.log(" All following arguments are optional:")
  console.log(" --year: specifies which year to execute. If no year is provided all of them will be executed. (i.e --year 2020) ")
  console.log(" --day: specifies exactly which problem to execute. If no day is provided all of them will be executed (i.e. --day 1) ")
  console.log(" --part: specifies exactly which problem's part to execute, Advents of Code consists of 2 parts per each day so allowed values are 1 and 2 (i.e. --part 2). If no part is provided all of them (1 and 2) are going to be executed")
}