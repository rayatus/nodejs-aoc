import chai from "chai"

const day = await import("../problems/day3.js")
const inputUtils = await import("../../lib/inputUtils.js")
const expect = chai.expect
const testUtil = await import("../../lib/testInputUtils.js")

const inputData = new testUtil.TestData()
  .addValueToTest("vJrwpWtwJgWrhcsFMMfFFhFp")
  .addValueToTest("jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL")
  .addValueToTest("PmmdzqPrVvPwwTWBwg")
  .addValueToTest("wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn")
  .addValueToTest("ttgJtRGJQctTZtZT")
  .addValueToTest("CrZsJsPPZsGzwwsLwLmpwMDw")
  .get()

describe("Test AoC 2022 Day 3", () => {
  it("Part 1", () => {
    expect(day.solve_part_1(inputData, inputUtils)).equal(157)
  })
  it("Part 2", () => {
    expect(day.solve_part_2(inputData, inputUtils)).equal(70)
  })
})
