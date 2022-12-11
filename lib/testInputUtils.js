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

  get() {
    return this.data.trim()
  }

}
export { TestData }
