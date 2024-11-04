import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import expensesReducer from '../reducers/expenses.js';
import filtersReducer from '../reducers/filters.js';

export default () => {
  const rootReducer = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  });
  
  // Store creation
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production',
  });

  return store;
};
