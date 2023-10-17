import { addYears } from "date-fns";

export const addYearToDate = (dateString: string) => {
  const date = new Date(dateString);
  const futureDate = addYears(date, 1);

  return futureDate.toISOString().split("T")[0];
};
