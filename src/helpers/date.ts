import { addYears, isAfter, isToday, parseISO, startOfToday } from "date-fns";

export const addYearToDate = (dateString: string) => {
  const date = new Date(dateString);
  const futureDate = addYears(date, 1);

  return futureDate.toISOString().split("T")[0];
};

export const isTodayOrLater = (dateString: string) => {
  const parsedDate = parseISO(dateString);

  return isToday(parsedDate) || isAfter(parsedDate, startOfToday());
};
