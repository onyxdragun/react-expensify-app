import selectExpenses from '../../src/selectors/expenses';

import expenses, {dateOne, dateTwo, dateThree} from '../fixtures/expenses.js';

test('Should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([
    expenses[2],
    expenses[1]
  ]);
});

test('Should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: dateTwo,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test('Should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: new Date("March 1 2024").getTime()
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0]]);
});

test('Should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});

test('Should filter by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});