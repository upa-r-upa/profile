export const getYearAndMonthFormat = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const prepending = `${month}`.padStart(2, '0');

  return `${year}.${prepending}.`;
};

export const getPeriodFormatDate = (start: Date, end: Date): string => {
  return `${getYearAndMonthFormat(start)} ~ ${getYearAndMonthFormat(end)}`;
};
