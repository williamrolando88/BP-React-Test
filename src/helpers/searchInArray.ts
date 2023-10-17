import { get } from "lodash";

export function searchInArray<T>(
  elementsArray: T[],
  fieldsArray: string[],
  searchText: string
): T[] {
  if (!elementsArray.length || !fieldsArray.length) return [];
  if (!searchText) return elementsArray;

  const searchRegex = new RegExp(searchText.trim(), "i");
  return elementsArray.filter((element) =>
    fieldsArray.some((field) =>
      searchRegex.test(String(get(element, field, "")))
    )
  );
}

/* 
export const searchInCases = (
  cases: NomosCase[],
  searchText: string
): NomosCase[] => {
  if (!searchText) return cases;

  return cases.filter((nomosCase) => {
    return ["name", "description", "tags[0].name"].some((field) =>
      searchRegex.test(String(get(nomosCase, field, "")))
    );
  });
};
*/
