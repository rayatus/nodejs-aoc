import chai from "chai"

const day = await import("../problems/day2.js")
const inputUtils = await import("../../lib/inputUtils.js")
const expect = chai.expect

describe("Test AoC 2021 Day 2", () => {
  it("Part 1", () => {
    const inputData = "forward 5\r\ndown 5\r\nforward 8\r\nup 3\r\ndown 8\r\nforward 2\r\n"
    const result = day.solve_part_1(inputData, inputUtils)
    expect(result).equal(150)
  })
  it("Part 2", () => {
    const inputData = "forward 5\r\ndown 5\r\nforward 8\r\nup 3\r\ndown 8\r\nforward 2"
    expect(day.solve_part_2(inputData, inputUtils)).equal(900)
  })
})
