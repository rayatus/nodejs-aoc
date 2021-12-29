import chai from "chai"

const day = await import("../problems/day3.js")
const inputUtils = await import("../../lib/inputUtils.js")
const testUtil = await import("../../lib/testInputUtils.js")
const expect = chai.expect

const inputData = new testUtil.TestData()
  .addValueToTest("00100")
  .addValueToTest("11110")
  .addValueToTest("10110")
  .addValueToTest("10111")
  .addValueToTest("10101")
  .addValueToTest("01111")
  .addValueToTest("00111")
  .addValueToTest("11100")
  .addValueToTest("10000")
  .addValueToTest("11001")
  .addValueToTest("00010")
  .addValueToTest("01010")
  .get()

describe("Test AoC 2021 Day 3", () => {
  it("Part 1", () => {
    expect(day.solve_part_1(inputData, inputUtils)).equal(198)
  })
  it.skip("Part 2", () => {
    expect(day.solve_part_2(inputData, inputUtils)).equal(900)
  })
})
