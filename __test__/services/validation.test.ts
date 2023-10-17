import { Mock, describe, expect, test, vi } from "vitest";
import { apiRoutes } from "../../src/services/APIRoutes";
import { API_AUTHOR_ID } from "../../src/services/serviceCaller";
import { validateId } from "../../src/services/validation";

describe("validateId", () => {
  test.each([true, false])(
    "should successfully return $p response",
    async (mockResponse) => {
      (global.fetch as Mock) = vi.fn(() =>
        Promise.resolve({
          status: 200,
          json: async () => mockResponse,
        })
      );

      const result = await validateId("some-id");

      const url = new URL(apiRoutes.verification);
      const params = url.searchParams;

      params.append("id", "some-id");

      expect(global.fetch).toBeCalledWith(url, {
        method: "GET",
        headers: { authorId: API_AUTHOR_ID },
      });
      expect(result.status).toBe(200);
      expect(result.error).toBeNull();
      expect(result.data).toEqual(mockResponse);
    }
  );
});
