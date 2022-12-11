import chai from "chai"

const day = await import("../problems/day2.js")
const inputUtils = await import("../../lib/inputUtils.js")
const expect = chai.expect
const testUtil = await import("../../lib/testInputUtils.js")

const inputData = new testUtil.TestData()
  .addValueToTest("A Y")
  .addValueToTest("B X")
  .addValueToTest("C Z")
  .get()

describe("Test AoC 2022 Day 2", () => {
  it("Part 1", () => {
    expect(day.solve_part_1(inputData, inputUtils)).equal(15)
  })
  it("Part 2", () => {
    expect(day.solve_part_2(inputData, inputUtils)).equal(12)
  })
})
