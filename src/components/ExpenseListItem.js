import React from "react";
import { Link } from "react-router-dom";
import {format} from 'date-fns';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <div>
    <h3>
        <Link
          to={`/edit/${id}`}
        >
          {description}
        </Link>
      </h3>
    <p>
      { numeral(amount/100).format('$0,0.00') }
      - 
      { format(new Date(createdAt), 'dd-MM-yyyy') }
    </p>
  </div>
);

export default ExpenseListItem;