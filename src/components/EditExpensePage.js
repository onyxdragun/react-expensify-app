import React from "react";
import {connect} from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import ExpenseForm from "./ExpenseForm.js";
import { editExpense, removeExpense } from "../actions/expenses.js";

const EditExpensePage = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();
  const selectedExpense = props.expenses.find((expense) => {
    return expense.id === id;
  });

  return (
    <div>
     <ExpenseForm
      expense={selectedExpense}
      onSubmit={(expense) => {
        // Dispatch the action to edit the expense
        // Redirect to the dashboard
        console.log('updated', expense);
        props.dispatch(editExpense(id, expense));
        navigate('/');
      }}
     />
      <button
        onClick={() => {
          props.dispatch(removeExpense({id}));
          navigate('/');
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
};

export default connect(mapStateToProps)(EditExpensePage);