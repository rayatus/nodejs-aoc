import { expect } from "chai"
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const inputUtils = await import("../../lib/inputUtils.js")
const testUtil = await import("../../lib/testInputUtils.js")

const metadata = new testUtil.TestData().getTestMetadata(__filename)

const day = await import(metadata.pathToProblem)

describe(`Test AoC ${metadata.year} Day ${metadata.day}`, () => {
  it("Part 1", () => {
    expect(day.solve_part_1('bvwbjplbgvbhsrlpgdmjqwftvncz', inputUtils)).equal(5)
    expect(day.solve_part_1('nppdvjthqldpwncqszvftbrmjlhg', inputUtils)).equal(6)
    expect(day.solve_part_1('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', inputUtils)).equal(10)
    expect(day.solve_part_1('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', inputUtils)).equal(11)
  })
  it("Part 2", () => {
    expect(day.solve_part_1('bvwbjplbgvbhsrlpgdmjqwftvncz', inputUtils)).equal(-1)
    expect(day.solve_part_1('nppdvjthqldpwncqszvftbrmjlhg', inputUtils)).equal(-1)
    expect(day.solve_part_1('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', inputUtils)).equal(-1)
    expect(day.solve_part_1('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', inputUtils)).equal(-1)
  })
})
