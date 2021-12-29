import chai from "chai"

const day = await import("../problems/day1.js")
const inputUtils = await import("../../lib/inputUtils.js")
const expect = chai.expect
const testUtil = await import("../../lib/testInputUtils.js")

const inputData = new testUtil.TestData()
  .addValueToTest(199)
  .addValueToTest(200)
  .addValueToTest(208)
  .addValueToTest(210)
  .addValueToTest(200)
  .addValueToTest(200)
  .addValueToTest(207)
  .addValueToTest(240)
  .addValueToTest(269)
  .addValueToTest(260)
  .addValueToTest(263)
  .get()

describe("Test AoC 2021 Day 1", () => {
  it("Part 1", () => {
    expect(day.solve_part_1(inputData, inputUtils)).equal(7)
  })
  it("Part 2", () => {
    expect(day.solve_part_2(inputData, inputUtils)).equal(5)
  })
})
