import moment from 'moment';

// Get visible expenses
 const expenses=(expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  })
  .sort((a, b) =>sortBy==='date' ? a.createdAt < b.createdAt ? 1 : -1: a.amount < b.amount ? 1 : -1);
};
export default expenses
