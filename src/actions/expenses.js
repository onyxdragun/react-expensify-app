import { get, push, remove, ref, update } from "firebase/database";
import database from '../firebase/firebase.js';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const dbRefUserExpenses = ref(database, `users/${uid}/expenses`);
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return push(dbRefUserExpenses, expense)
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
  return async (dispatch, getState) => {
    try {
      // Target specific item
      const uid = getState().auth.uid;
      const dbRefUserExpensesItem = ref(database, `users/${uid}/expenses/${id}`);
      const snapshot = await remove(dbRefUserExpensesItem);
      // Remove from redux store
      dispatch(removeExpense({ id }));
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

export const startEditExpense = (id, updates) => {
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth.uid;
      const dbRefUserExpensesItem = ref(database, `users/${uid}/expenses/${id}`);
      const snapshot = await update(dbRefUserExpensesItem, {
        ...updates
      });
      dispatch(editExpense(id, updates));
    } catch (error) {
      console.log("Error updating expense:", error);
    }
  };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// Fetches data stored in Firebase and feeds it the store
export const startSetExpenses = () => {
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth.uid;
      const dbRefUserExpenses = ref(database, `users/${uid}/expenses`);
      const snapshot = await get(dbRefUserExpenses);
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