 export const generateRecurrenceDates = (startDate, endDate, recurrenceType, interval) => {
  if (!startDate) return [];
  
  const dates = [];
  let currentDate = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;

  while (!end || currentDate <= end) {
    dates.push(currentDate.toDateString());

    switch (recurrenceType) {
      case 'daily':
        currentDate.setDate(currentDate.getDate() + interval);
        break;
      case 'weekly':
        currentDate.setDate(currentDate.getDate() + interval * 7);
        break;
      case 'monthly':
        currentDate.setMonth(currentDate.getMonth() + interval);
        break;
      case 'yearly':
        currentDate.setFullYear(currentDate.getFullYear() + interval);
        break;
      default:
        break;
    }
  }
  
  return dates;
};
