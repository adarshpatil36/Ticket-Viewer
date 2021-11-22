export const formateDate = (val) => {
  const processedDate = new Date(val);
  return processedDate.toDateString();
};
