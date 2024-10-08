import selectExpensesTotal from '../../src/selectors/expenses-total.js';
import expenses from '../fixtures/expenses.js';

test('Should return 0 if no expenses', () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test('Should correctly add up a single expense', () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test('Should correctly add up multiple expenses', () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(114195);
});