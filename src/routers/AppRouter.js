import React from "react";
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';

import Header from "../components/Header.js";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage.js";
import AddExpensePage from "../components/AddExpensePage.js";
import EditExpensePage from "../components/EditExpensePage.js";
import HelpPage from "../components/HelpPage.js";
import NotFoundPage from "../components/NotFoundPage.js";

const AppRouter = () => (
  <Router>
    <Header />
    <Routes>
      <Route 
        path='/'
        element={<ExpenseDashboardPage/>}
      />
      <Route
        path='/create'
        element={<AddExpensePage/>}
      />
      <Route
        path='/edit/:id'
        element={<EditExpensePage/>}
      />
      <Route
        path='/help'
        element={<HelpPage/>}
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  </Router>
);

export default AppRouter;
