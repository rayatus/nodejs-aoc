import chai from "chai"

const day = await import("../problems/day2.js")
const inputUtils = await import("../../lib/inputUtils.js")
const testUtil = await import("../../lib/testInputUtils.js")
const expect = chai.expect

const inputData = new testUtil.TestData()
  .addValueToTest("forward 5")
  .addValueToTest("down 5")
  .addValueToTest("forward 8")
  .addValueToTest("up 3")
  .addValueToTest("down 8")
  .addValueToTest("forward 2")
  .get()

describe("Test AoC 2021 Day 2", () => {
  it("Part 1", () => {
    expect(day.solve_part_1(inputData, inputUtils)).equal(150)
  })
  it("Part 2", () => {
    expect(day.solve_part_2(inputData, inputUtils)).equal(900)
  })
})
