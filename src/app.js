import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter.js";
import configureStore from "./store/configureStore.js";
import { addExpense } from "./actions/expenses.js";

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// });

store.dispatch(addExpense({ description: 'Water bill', amount: '4500', createdAt: 5 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: '1500', createdAt: 10 }));
store.dispatch(addExpense({ description: 'Rent', amount: '1950', createdAt: 1000 }));

const root = ReactDOM.createRoot(document.querySelector('#app'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </StrictMode>
);
