import { Mock, describe, expect, test, vi } from "vitest";
import { _mockCreateProduct } from "../../../__mock__/getProducts";
import { apiRoutes } from "../../../src/services/APIRoutes";
import { createProduct } from "../../../src/services/product";
import { API_AUTHOR_ID } from "../../../src/services/serviceCaller";

describe("createProduct", () => {
  test("should return the created product", async () => {
    (global.fetch as Mock) = vi.fn(() =>
      Promise.resolve({
        status: 200,
        json: async () => _mockCreateProduct.expectedResponse,
      })
    );

    const result = await createProduct(_mockCreateProduct.formData);

    expect(global.fetch).toBeCalledWith(apiRoutes.index, {
      method: "POST",
      body: JSON.stringify(_mockCreateProduct.formData),
      headers: { authorId: API_AUTHOR_ID, "Content-Type": "application/json" },
    });
    expect(result.status).toBe(200);
    expect(result.error).toBeNull();
    expect(result.data).toEqual(_mockCreateProduct.expectedResponse);
  });
});
