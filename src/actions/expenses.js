import { get, push, remove, ref } from "firebase/database";
import database, { dbRefExpenses } from '../firebase/firebase.js';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return push(dbRefExpenses, expense)
      .then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return async (dispatch) => {
    try {
      // Taret specific item
      const dbRefExpensesItem = ref(database, `expenses/${id}`);
      const snapshot = await remove(dbRefExpensesItem);
      // Remove from redux store
      dispatch(removeExpense({id}));
    } catch (error) {
      console.log("Error removing expenses: ", error);
    }
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// Fetches data stored in Firebase and feeds it the store
export const startSetExpenses = () => {
  return async (dispatch) => {
    try {
      const snapshot = await get(dbRefExpenses);
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setExpenses(expenses));
    } catch (error) {
      console.log("Error fetching expenses: ", error);
    }
  };
};