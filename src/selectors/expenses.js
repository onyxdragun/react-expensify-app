// Get visible Expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= new Date(startDate).setHours(0,0,0,0);
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= new Date(endDate).setHours(23,59,59,999);
    const textMatch = expense.description.toLowerCase().includes(text);
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

export default getVisibleExpenses;