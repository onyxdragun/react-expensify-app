import React from "react";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ExpenseForm from "./ExpenseForm.js";
import { startAddExpense } from "../actions/expenses.js";


const AddExpensePage = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(startAddExpense(expense));
          navigate('/');
        }}
      />
    </div>
  );
};

export default connect()(AddExpensePage);