/*--------------------------------------------------------------------------------

    ~~~~ Advents of Code solved in NodeJS for learning purposes ~~~~

--------------------------------------------------------------------------------*/

import fs from "fs"
import minimist from "minimist"
import chalk from "chalk"

const _YEAR_NOT_DEFINED = -1
const _DAY_NOT_DEFINED = -1
const _PART_NOT_DEFINED = -1

const args = minimist(process.argv.slice(2))
let yearToRun = args["year"] || _YEAR_NOT_DEFINED
let dayToRun = args["day"] || _DAY_NOT_DEFINED
let part = args["part"] || _PART_NOT_DEFINED
let help = args["help"]

if (help !== undefined) {
  showDocumentation()
} else {
  //Check if arguments are correct
  if (
    (yearToRun != _YEAR_NOT_DEFINED && isValidYear(yearToRun) == false) ||
    (dayToRun != _DAY_NOT_DEFINED && isValidDay(dayToRun) == false) ||
    (part != _PART_NOT_DEFINED && isValidPart(part) == false)
  ) {
    showDocumentation()
  } else {
    executeAoC(yearToRun, dayToRun, part)
  }
}

//Some terminal format
const msgError = chalk.red
const msgInfo = chalk.blue
const msgResult = chalk.yellow

//Executes corresponding exercises
async function executeAoC(yearToRun, dayToRun, part) {
  try {
    const inputUtil = await import("./lib/inputUtils.js")

    const dir = fs.readdirSync("./")
    for (const dirContent of dir) {
      if (isValidYear(dirContent) == true && (dirContent == yearToRun || yearToRun == _YEAR_NOT_DEFINED)) {
        console.log(`Executing AoC ${msgInfo(dirContent)}`)

        let yearFolder = `./${dirContent}`
        let problemFolder = `${yearFolder}/problems`
        let inputFolder = `${yearFolder}/input`

        const files = fs.readdirSync(problemFolder)
        files.forEach((file) => {
          let day = file.slice(3, -3)           // day1.js ==> 1
          let inputFilename = file.slice(0, -3) // day1.js ==> day1
          let inputPath = `${inputFolder}/${inputFilename}`

          if (isValidDay(day) && (day == dayToRun || dayToRun == _DAY_NOT_DEFINED))
            try {
              const inputData = fs.readFileSync(inputPath, "utf8")

              run(`${problemFolder}/${file}`, part, inputData, inputUtil)
            } catch (error) {
              console.error(msgError(`Error while reading contents of input file:${inputPath}`))
              console.error(error)
            }
        })
      }
    }
  } catch (error) {
    console.error(msgError(`Something wrong happend while importing inputUtils.js : ${error}`))
  }
}

//Imports the solutions for the given year/Day
async function getAoCModule(modulePath) {
  try {
    const aocModule = await import(modulePath)
    return aocModule
  } catch (error) {
    console.error(msgError(`Something wrong happend while importing package '${modulePath}' : ${error}`))
  }
}

//Executes corresponding part, or both, for a given day of the given year
async function run(modulePath, part, input, inputUtil) {
  let runPart = 0

  try {
    const aocModule = await getAoCModule(modulePath)

    console.log(`Solving ${msgInfo(modulePath)}`)
    if (part == 1 || part == _PART_NOT_DEFINED) {
      runPart = 1
      const result1 = aocModule.solve_part_1(input, inputUtil)
      console.log(`Solution for part 1 => ${msgResult(result1)}`)
    }
    if (part == 2 || part == _PART_NOT_DEFINED) {
      runPart = 2
      const result2 = aocModule.solve_part_2(input, inputUtil)
      console.log(`Solution for part 2 => ${msgResult(result2)}`)
    }
  } catch (error) {
    console.error(
      msgError(`Something wrong happend while executing solutions for '${modulePath}', part='${runPart}' : ${error}`)
    )
  }
}

//Verifies if a given Year has a correct value
function isValidYear(year) {
  let isValid = false
  if (isNaN(year) == true) isValid = false
  if (year >= 2020 && year <= 9999) isValid = true
  return isValid
}

//Verifies if a given Day has a correct value
function isValidDay(day) {
  let isValid = false
  if (isNaN(day) == true) isValid = false
  if (day > 0 && day <= 31) isValid = true
  return isValid
}

//Verifies if a given Part has a correct value
function isValidPart(part) {
  let isValid = false
  if (isNaN(part) == true) isValid = false
  if (part > 0 && part < 3) isValid = true
  return isValid
}

//Returns appDocumentation
function showDocumentation() {
  console.log(" Please execute it as: aoc.js --year --day --part")
  console.log(" All following arguments are optional:")
  console.log(
    "\t --year: specifies which year to execute. If no year is provided all of them will be executed. (i.e --year 2020) "
  )
  console.log(
    "\t --day: specifies exactly which problem to execute. If no day is provided all of them will be executed (i.e. --day 1) "
  )
  console.log(
    "\t --part: specifies exactly which problem's part to execute, Advents of Code consists of 2 parts per each day so allowed values are 1 and 2 (i.e. --part 2). If no part is provided all of them (1 and 2) are going to be executed"
  )
  console.log("\nFor instance aoc.js --year 2021 --day 1 --part 1")
}
