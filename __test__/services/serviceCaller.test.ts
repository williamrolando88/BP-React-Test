import { Mock, describe, expect, test, vi } from "vitest";
import { z } from "zod";
import { apiRoutes } from "../../src/services/APIRoutes";
import { API_AUTHOR_ID, serviceCaller } from "../../src/services/serviceCaller";

describe("serviceCaller", () => {
  test("should thrown an error if could not reach the server", async () => {
    (global.fetch as Mock) = vi.fn();

    const caller = async () =>
      await serviceCaller(
        apiRoutes.index,
        {
          method: "GET",
        },
        z.string()
      );

    expect(caller).rejects.toThrow("Couldn't connect to server");
  });

  test("should thrown an error if could not read server response", async () => {
    (global.fetch as Mock) = vi.fn(() => ({ json: Promise.resolve() }));

    const caller = async () =>
      await serviceCaller(
        apiRoutes.index,
        {
          method: "GET",
        },
        z.string()
      );

    expect(caller).rejects.toThrow("Couldn't read server response");
  });

  test("should return raw error string when receiving status response different than 200", async () => {
    (global.fetch as Mock) = vi.fn(() =>
      Promise.resolve({
        status: 400,
        json: async () => "Header 'authorId' is missing",
      })
    );

    const response = await serviceCaller(
      apiRoutes.index,
      {
        method: "GET",
      },
      z.number()
    );

    expect(response.status).toBe(400);
    expect(response.error).toBe("Header 'authorId' is missing");
  });

  test("should return a zod parse error response", async () => {
    (global.fetch as Mock) = vi.fn(() =>
      Promise.resolve({
        status: 200,
        json: async () => "This is a string",
      })
    );

    const response = await serviceCaller(
      apiRoutes.index,
      {
        method: "GET",
      },
      z.number()
    );

    expect(global.fetch).toHaveBeenCalledWith(apiRoutes.index, {
      method: "GET",
      headers: { authorId: API_AUTHOR_ID },
    });
    expect(response.status).toBe(200);
    expect(response.error).toBe("Cannot parse server response");
  });

  test("should return a successfully parsed response", async () => {
    (global.fetch as Mock) = vi.fn(() =>
      Promise.resolve({
        status: 200,
        json: async () => "This is a success response",
      })
    );

    const response = await serviceCaller(
      apiRoutes.index,
      {
        method: "GET",
      },
      z.string()
    );

    expect(global.fetch).toHaveBeenCalledWith(apiRoutes.index, {
      method: "GET",
      headers: { authorId: API_AUTHOR_ID },
    });
    expect(response.status).toBe(200);
    expect(response.data).toBe("This is a success response");
  });
});
