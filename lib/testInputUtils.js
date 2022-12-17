import path from "path"

class TestData {

  NEW_LINE = '\r\n'

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

  get() {
    return this.data.trim()
  }

  //Given a path with content as follows '.../nodejs-aoc/2022/tests/day4_test.js' it dynamically
  //constructs relative PATH to the PROBLEM to be executed but also identifies to which
  //YEAR and DAY is the testFileName related to
  getTestMetadata(fullPath) {
    if (path === undefined) throw 'file name not provided'

    //From Dir hierarchie we get YEAR
    const testDir = path.dirname(fullPath)
    const aDir = testDir.split('/')
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
