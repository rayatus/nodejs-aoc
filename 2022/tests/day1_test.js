import chai from "chai"

const day = await import("../problems/day1.js")
const inputUtils = await import("../../lib/inputUtils.js")
const expect = chai.expect
const testUtil = await import("../../lib/testInputUtils.js")

const inputData = new testUtil.TestData()
  .addValueToTest(1000)
  .addValueToTest(2000)
  .addValueToTest(3000)
  .addValueToTest()
  .addValueToTest(4000)
  .addValueToTest()
  .addValueToTest(5000)
  .addValueToTest(6000)
  .addValueToTest()
  .addValueToTest(7000)
  .addValueToTest(8000)
  .addValueToTest(9000)
  .addValueToTest()
  .addValueToTest(10000)
  .get()

describe("Test AoC 2022 Day 1", () => {
  it("Part 1", () => {
    expect(day.solve_part_1(inputData, inputUtils)).equal(24000)
  })
  it("Part 2", () => {
    expect(day.solve_part_2(inputData, inputUtils)).equal(5)
  })
})
