import { Mock, describe, expect, test, vi } from "vitest";
import { isIdAvailable } from "../../src/helpers/isIdAvailable";

describe("isIdAvailable", () => {
  test.each([
    { exist: true, isAvailable: false },
    { exist: false, isAvailable: true },
  ])(
    "should return $isAvailable if the server responds $exist",
    async ({ exist, isAvailable }) => {
      (global.fetch as Mock) = vi.fn(() =>
        Promise.resolve({
          status: 200,
          json: async () => exist,
        })
      );

      const result = await isIdAvailable("some-id");

      expect(result).toBe(isAvailable);
    }
  );
});
