class TestData {
  constructor() {
    this.data = ""
  }
  addValueToTest(x) {
    this.data = this.data + x + "\r\n"
    return this
  }
  get() {
    return this.data
  }
}
export { TestData }
