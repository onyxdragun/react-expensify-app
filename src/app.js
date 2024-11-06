import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter.js";
import configureStore from "./store/configureStore.js";
import { startSetExpenses } from "./actions/expenses.js";

import './firebase/firebase.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const root = ReactDOM.createRoot(document.querySelector('#app'));

// Fetch what is in the DB prior to render
store.dispatch(startSetExpenses()).then(() => {
  root.render(
    <StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </StrictMode>
  );
});
