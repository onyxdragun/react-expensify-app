import { set } from "firebase/database";
import { addExpense, editExpense, removeExpense, startAddExpense, setExpenses } from "../../src/actions/expenses";
import { dbRefExpenses } from "../../src/firebase/firebase";
import expenses from '../fixtures/expenses.js';

const uid = 'thismytestuid';

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = {description, note, amount, createdAt};
  });
  set(dbRefExpenses, expensesData)
    .then(() => done());
});


test('Should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('Shold setup edit expense action object', () => {
  const action = editExpense('123abc', {note: 'This is a note'});

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'This is a note'
    }
  });
});

test('Should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
});

// test('Should add expense to database and store', () => {
//   const expenseData = {
//     description: 'Mouse',
//     amount: 3000,
//     note: 'This one is better',
//     createdAt: 1000
//   };

//   store.dispatch(startAddExpense(expenseData)).then(() => {
//     expect(1).toBe(2);
//   });
// });

// test('Should add expense with defaults to database and store', () => {

// });

// test('Should setup add expense action object with default values', () => {
//   const action = addExpense({});

//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   });
// });

test('Should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});
