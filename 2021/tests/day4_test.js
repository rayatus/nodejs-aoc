import chai from "chai"

const day = await import("../problems/day4.js")
const inputUtils = await import("../../lib/inputUtils.js")
const testUtil = await import("../../lib/testInputUtils.js")
const expect = chai.expect

const inputData = new testUtil.TestData()
  .addValueToTest("7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1")
  .addValueToTest("")
  .addValueToTest("22 13 17 11  0")
  .addValueToTest(" 8  2 23  4 24")
  .addValueToTest("21  9 14 16  7")
  .addValueToTest(" 6 10  3 18  5")
  .addValueToTest(" 1 12 20 15 19")
  .addValueToTest("")
  .addValueToTest(" 3 15  0  2 22")
  .addValueToTest(" 9 18 13 17  5")
  .addValueToTest("19  8  7 25 23")
  .addValueToTest("20 11 10 24  4")
  .addValueToTest("14 21 16 12  6")
  .addValueToTest("")
  .addValueToTest("14 21 17 24  4")
  .addValueToTest("10 16 15  9 19")
  .addValueToTest("18  8 23 26 20")
  .addValueToTest("22 11 13  6  5")
  .addValueToTest(" 2  0 12  3  7")
  .get()

describe("Test AoC 2021 Day 4", () => {
  it("Part 1", () => {
    expect(day.solve_part_1(inputData, inputUtils)).equal(4512)
  })
  it.skip("Part 2", () => {
    expect(day.solve_part_2(inputData, inputUtils)).equal("?")
  })
})
