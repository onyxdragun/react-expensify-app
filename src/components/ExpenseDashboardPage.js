import React from "react";

import ExpenseList from "./ExpenseList.js";
import ExpenseListFilters from "./ExpenseListFilters.js";
import ExpensesSummary from "./ExpensesSummary.js";

const ExpenseDashboardPage = () => (
  <>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </>
);

export default ExpenseDashboardPage;