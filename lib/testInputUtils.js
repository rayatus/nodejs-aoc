import path from "node:path"
import fs from "node:fs"
class TestData {

  NEW_LINE = '\r\n'

  addFromFile(filePath) {
    if (filePath === undefined) throw 'file path not provided'
    this.data = fs.readFileSync(filePath, "utf8")
    return this
  }

  addValueToTest(x) {
    if (this.data === undefined) {
      this.data = x + this.NEW_LINE
    } else {

      if (x === undefined) {
        this.data = this.data + this.NEW_LINE
      } else {
        this.data = this.data + x + this.NEW_LINE
      }

    }
    return this
  }

  add(x) {
    return addValueToTest(x)
  }

  get(trim = true) {
    return trim ? this.data.trim() : this.data
  }

  //Given a path with content as follows '.../nodejs-aoc/2022/tests/day4_test.js' it dynamically
  //constructs relative PATH to the PROBLEM to be executed but also identifies to which
  //YEAR and DAY is the testFileName related to
  getTestMetadata(fullPath) {

    if (fullPath === undefined) throw 'file name not provided'

    //From Dir hierarchie we get YEAR
    const testDir = path.dirname(fullPath)
    const aDir = testDir.split(path.sep)
    const year = aDir[aDir.length - 2]

    //and from File DAY
    const filename = path.basename(fullPath)
    const aFile = filename.split('_')
    const dayNum = aFile[0].replace('day', '')

    return {
      "pathToProblem": `../problems/day${dayNum}.js`,
      "year": year,
      "day": dayNum
    }
  }

}
export { TestData }
