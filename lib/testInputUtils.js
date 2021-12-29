class TestData {
  addValueToTest(x) {
    if (this.data === undefined) {
      this.data = x + "\r\n"
    } else {
      this.data = this.data + x + "\r\n"
    }
    return this
  }
  get() {
    return this.data
  }
}
export { TestData }
