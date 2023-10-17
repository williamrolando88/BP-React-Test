import { Mock, describe, expect, test, vi } from "vitest";
import { _mockProductsArray } from "../../../__mock__/products";
import { apiRoutes } from "../../../src/services/APIRoutes";
import { getProducts } from "../../../src/services/product";
import { API_AUTHOR_ID } from "../../../src/services/serviceCaller";

describe("getProducts", () => {
  test("should return products list", async () => {
    (global.fetch as Mock) = vi.fn(() =>
      Promise.resolve({
        status: 200,
        json: async () => _mockProductsArray,
      })
    );

    const result = await getProducts();

    expect(global.fetch).toBeCalledWith(apiRoutes.index, {
      method: "GET",
      headers: { authorId: API_AUTHOR_ID, "Content-Type": "application/json" },
    });
    expect(result.status).toBe(200);
    expect(result.error).toBeNull();
    expect(result.data).toEqual(_mockProductsArray);
  });
});
