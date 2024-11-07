import React from "react";
import { Routes, Route } from 'react-router-dom';

import Header from "../components/Header.js";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage.js";
import AddExpensePage from "../components/AddExpensePage.js";
import EditExpensePage from "../components/EditExpensePage.js";
import NotFoundPage from "../components/NotFoundPage.js";
import LoginPage from "../components/LoginPage.js";
import PrivateRoute from "./PrivateRoute.js";
import PublicRoute from "./PublicRoute.js";

const AppRouter = () => (
  <>
    <Routes>
      <Route
        path='/'
        element={<PublicRoute>
          <LoginPage />
        </PublicRoute>}
      />
      <Route
        path='/dashboard'
        element={<PrivateRoute>
          <ExpenseDashboardPage />
        </PrivateRoute>}
      />
      <Route
        path='/create'
        element={<PrivateRoute>
          <AddExpensePage />
        </PrivateRoute>}
      />
      <Route
        path='/edit/:id'
        element={<PrivateRoute>
          <EditExpensePage />
        </PrivateRoute>}
      />
      <Route
        path='/login'
        element={<LoginPage />}
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  </>
);

export default AppRouter;
