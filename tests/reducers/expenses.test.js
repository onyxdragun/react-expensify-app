import expensesReducer from "../../src/reducers/expenses.js";
import expenses, {dateOne, dateTwo, dateThree} from "../fixtures/expenses.js";

test('Should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});

  expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expenses if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  
  const state = expensesReducer(expenses, action);
  
  expect(state).toEqual(expenses);
});

test('Should add an expenses', () => {
  const currentDate = new Date().getTime();
  const newExpense = {
    id: '777',
    description: 'Car payment',
    amount: 45000,
    note: '',
    createdAt: currentDate
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, newExpense]);

});

test('Should edit an expenses', () => {
  const note = 'Double Bubble';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      note
    }
  };

  const state = expensesReducer(expenses, action);

  expect(state[0].note).toEqual(note);
});

test('Should not edit an expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount: 10000
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});