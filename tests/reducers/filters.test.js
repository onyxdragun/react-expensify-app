import filtersReducer from "../../src/reducers/filters";

test('Should setup default fitler values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  });
});

test('Should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT', sortBy: 'amount'});
  expect(state.sortBy).toEqual('amount');
});

test('Should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = {type: 'SORT_BY_DATE', sortBy: 'date'};
  const state = filtersReducer(currentState, action);

  expect(state.sortBy).toEqual('date');
});

test('Should set text filter', () => {
  const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'Rent'});

  expect(state.text).toEqual('Rent');
});

test('Should set startDate filter', () => {
  const now = new Date().getTime();
  const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: now});

  expect(state.startDate).toEqual(now);
});


test('Should set endDate filter', () => {
  const now = new Date().getTime();
  const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: now});

  expect(state.endDate).toEqual(now);
});