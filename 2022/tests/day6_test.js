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
    expect(day.solve_part_2('mjqjpqmgbljsphdztnvjfqwrcgsmlb', inputUtils)).equal(19)
    expect(day.solve_part_2('bvwbjplbgvbhsrlpgdmjqwftvncz', inputUtils)).equal(23)
    expect(day.solve_part_2('nppdvjthqldpwncqszvftbrmjlhg', inputUtils)).equal(23)
    expect(day.solve_part_2('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', inputUtils)).equal(29)
    expect(day.solve_part_2('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', inputUtils)).equal(26)
  })
})
