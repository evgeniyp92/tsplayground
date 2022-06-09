export const dateStringToDate = (dateString: string): Date => {
  const dateArray: number[] = dateString
    .split('/')
    .map((el: string): number => parseInt(el));

  if (dateArray[1]) dateArray[1] = dateArray[1] - 1;
  return new Date(dateArray[2], dateArray[1], dateArray[0]);
};
