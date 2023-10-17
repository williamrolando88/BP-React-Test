import { describe, expect, test } from "vitest";
import { addYearToDate } from "../../src/helpers/date";

describe("addYearToDate", () => {
  test.each([
    { input: "2023-01-01", output: "2024-01-01" },
    { input: "2023-02-22", output: "2024-02-22" },
    { input: "2023-03-01", output: "2024-02-29" },
    { input: "2023-03-02", output: "2024-03-02" },
  ])("should return $output when $input is given", ({ input, output }) => {
    const result = addYearToDate(input);

    expect(result).toBe(output);
  });
});
