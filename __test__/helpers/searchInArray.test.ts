import { describe, expect, test } from "vitest";
import { _mockProductsArray } from "../../__mock__/getProducts";
import { searchInArray } from "../../src/helpers/searchInArray";

describe("searchInArray", () => {
  test("should return empty array if the array of elements is empty", () => {
    const result = searchInArray([], ["any", "field"], "");

    expect(result).toStrictEqual([]);
  });

  test("should return empty array if the array of fields is empty", () => {
    const result = searchInArray(_mockProductsArray, [], "");

    expect(result).toStrictEqual([]);
  });

  test("should return the full array of elements if the search text is empty", () => {
    const result = searchInArray(_mockProductsArray, ["name"], "");

    expect(result).toStrictEqual(_mockProductsArray);
  });

  test.each([
    { searchString: "product-name-2", expected: [_mockProductsArray[1]] },
    { searchString: "description-1", expected: [_mockProductsArray[0]] },
    { searchString: "-3", expected: [_mockProductsArray[2]] },
    { searchString: "product-name", expected: _mockProductsArray },
  ])(
    "should return the matching elements when providing $searchString as search text",
    ({ expected, searchString }) => {
      const result = searchInArray(
        _mockProductsArray,
        ["name", "description"],
        searchString
      );

      expect(result).toStrictEqual(expected);
    }
  );
});
