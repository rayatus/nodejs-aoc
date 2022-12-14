import chai from "chai"

const day = await import("../problems/day4.js")
const inputUtils = await import("../../lib/inputUtils.js")
const expect = chai.expect
const testUtil = await import("../../lib/testInputUtils.js")

const inputData = new testUtil.TestData()
  .addValueToTest("2-4,6-8")
  .addValueToTest("2-3,4-5")
  .addValueToTest("5-7,7-9")
  .addValueToTest("2-8,3-7")
  .addValueToTest("6-6,4-6")
  .addValueToTest("2-6,4-8")
  .addValueToTest("5-17,1-6")
  .get()

describe("Test AoC 2022 Day 4", () => {
  it("Part 1", () => {
    expect(day.solve_part_1(inputData, inputUtils)).equal(2)
  })
  it("Part 2", () => {
    expect(day.solve_part_2(inputData, inputUtils)).equal(70)
  })
})
