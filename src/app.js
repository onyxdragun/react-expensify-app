import React, { StrictMode, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { useNavigate, BrowserRouter as Router, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import AppRouter from "./routers/AppRouter.js";
import configureStore from "./store/configureStore.js";
import { startSetExpenses } from "./actions/expenses.js";
import { login, logout } from "./actions/auth.js";

import './firebase/firebase.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
const root = ReactDOM.createRoot(document.querySelector('#app'));

const App = () => {
  const [loggedIn, setLoggedIn] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        store.dispatch(login(user.uid));
        setLoggedIn(true);
        console.log("log in");
        store.dispatch(startSetExpenses()).then(() => {

          if (location.pathname === '/') {
            navigate('/dashboard');
          }
        });
      } else {
        store.dispatch(logout());
        setLoggedIn(false);
        console.log("log out");
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    <StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </StrictMode>
  );
}

root.render(<Router><App /></Router>);
