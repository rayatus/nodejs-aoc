import { expect } from "chai"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const inputUtils = await import("../../lib/inputUtils.js")
const testUtil = await import("../../lib/testInputUtils.js")
const TestUtil = new testUtil.TestData()

const metadata = TestUtil.getTestMetadata(__filename)

const day = await import(metadata.pathToProblem)

const inputData = TestUtil
  .addValueToTest("2-4,6-8")
  .addValueToTest("2-3,4-5")
  .addValueToTest("5-7,7-9")
  .addValueToTest("2-8,3-7")
  .addValueToTest("6-6,4-6")
  .addValueToTest("2-6,4-8")
  .get()

describe(`Test AoC ${metadata.year} Day ${metadata.day}`, () => {
  it("Part 1", () => {
    expect(day.solve_part_1(inputData, inputUtils)).equal(2)
  })
  it("Part 2", () => {
    expect(day.solve_part_2(inputData, inputUtils)).equal(4)
  })
})
