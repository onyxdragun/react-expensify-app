import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from "../../src/actions/filters";


test('Should generate set start date action object', () => {
  const action = setStartDate(1000);

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: 1000
  });
});

test('Should generate set end date action object', () => {
  const action = setEndDate(1000);

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: 1000
  });
});

test('Should generate set text filter object with text value', () => {
  const text = "Something In";
  const action = setTextFilter(text);

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('Should generate set text filter object with default value', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('Should generate action object for sort by date', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
  });
});

test('Should generate action object for sort by amount', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  });
});