import { z } from "zod";

export const API_AUTHOR_ID = "200";

export interface FetchResponseCS<T> {
  data: T | null;
  error: unknown;
  status: number | null;
}

export async function serviceCaller<T extends z.ZodTypeAny>(
  path: string | URL,
  config: RequestInit,
  parser: T
): Promise<FetchResponseCS<z.infer<T>>> {
  const result: FetchResponseCS<unknown> = {
    data: null,
    error: null,
    status: null,
  };

  const configuration: RequestInit = {
    ...config,
    headers: { authorId: API_AUTHOR_ID },
  };

  let response;
  try {
    response = await fetch(path, configuration);
    result.status = response.status;
  } catch (ex) {
    throw new Error("Couldn't connect to server");
  }

  let jsonResponse: unknown;

  try {
    jsonResponse = await response.json();
  } catch (ex) {
    throw new Error("Couldn't read server response");
  }

  if (response.status !== 200) {
    result.error = jsonResponse;
    return result;
  }

  const parsed = parser.safeParse(jsonResponse);
  if (parsed?.success === false) {
    result.error = "Cannot parse server response";
    return result;
  }

  result.data = parser.parse(jsonResponse);
  return result;
}
