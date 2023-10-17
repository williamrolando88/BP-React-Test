import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { addYearToDate, isTodayOrLater } from "../../src/helpers/date";

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

describe("isTodayOrLater with current date set to 2023-10-17", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2023, 9, 17, 0));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test.each([
    { input: "2023-01-16", output: false },
    { input: "2023-10-16", output: false },
    { input: "2023-10-17", output: true },
    { input: "2023-10-18", output: true },
    { input: "2023-11-17", output: true },
    { input: "2024-10-17", output: true },
  ])("should return $output given $input ", ({ input, output }) => {
    const result = isTodayOrLater(input);
    expect(result).toBe(output);
  });
});
