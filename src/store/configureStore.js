import { configureStore, combineReducers } from "@reduxjs/toolkit";

import expensesReducer from '../reducers/expenses.js';
import filtersReducer from '../reducers/filters.js';

export default () => {
  const rootReducer = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  });
  
  // Store creation
  const store = configureStore({
    reducer: rootReducer
  });

  return store;
};
