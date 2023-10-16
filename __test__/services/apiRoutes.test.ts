import { describe, expect, test } from "vitest";
import { apiRoutes } from "../../src/services/APIRoutes";

describe("apiRoutes", () => {
  const baseUrl =
    "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/";
  test.each([{ path: apiRoutes.index, expected: baseUrl + "bp/products" }])(
    "should return $path",
    ({ path, expected }) => {
      expect(path).toBe(expected);
    }
  );
});
