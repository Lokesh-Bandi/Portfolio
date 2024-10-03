export const getCurrentDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0'); // Ensure two digits
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = today.getFullYear();

  return `${day}-${month}-${year}`; // Format as DD-MM-YYYY
};

export const parseDate = (dateString) => {
  const [day, month, year] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day); // Month is 0-indexed
};

export const getDuration = (startDateStr, endDateStr) => {
  const startDate = parseDate(startDateStr);
  const endDate = parseDate(endDateStr);

  const duration = endDate - startDate;

  const days = Math.floor(duration / (1000 * 60 * 60 * 24));
  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth() + years * 12;

  return {
    days,
    months,
    years,
  };
};
