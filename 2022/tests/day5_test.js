import { expect } from "chai"
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const inputUtils = await import("../../lib/inputUtils.js")
const testUtil = await import("../../lib/testInputUtils.js")

const TestData = new testUtil.TestData()
const __testFileName = __filename.replace("day5_test.js", "day5_test_data.txt")
const inputData = TestData.addFromFile(__testFileName).get(false)

const metadata = TestData.getTestMetadata(__filename)
const day = await import(metadata.pathToProblem)

describe(`Test AoC ${metadata.year} Day ${metadata.day}`, () => {
  it("Part 1", () => {
    expect(day.solve_part_1(inputData, inputUtils)).equal("CMZ")
  })
  it("Part 2", () => {
    expect(day.solve_part_2(inputData, inputUtils)).equal(4)
  })
})
