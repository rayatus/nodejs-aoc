import chai from "chai"

const day = await import("../problems/day1.js")
const inputUtils = await import("../../lib/inputUtils.js")
const expect = chai.expect
const inputData = `${199}\r\n${200}\r\n${208}\r\n${210}\r\n${200}\r\n${207}\r\n${240}\r\n${269}\r\n${260}\r\n${263}`

describe("Test AoC 2021 Day 1", () => {
  it("Part 1", () => {
    expect(day.solve_part_1(inputData, inputUtils)).equal(7)
  })
  it("Part 2", () => {
    expect(day.solve_part_2(inputData, inputUtils)).equal(5)
  })
})
