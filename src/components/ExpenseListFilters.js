import React, {Component} from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";

import { setTextFilter,
         sortByAmount,
         sortByDate,
         setStartDate,
         setEndDate 
} from "../actions/filters.js";

import 'react-datepicker/dist/react-datepicker.css'; // main css file

class ExpenseListFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null
    };
  }

  handleStartDateChange = (date) => {
    const startDate = date ? date.getTime() : null;
    this.setState({startDate: date});
    this.props.dispatch(setStartDate(startDate));
  }

  handleEndDateChange = (date) => {
    const endDate = date ? date.getTime() : null;
    this.setState({endDate: date});
    this.props.dispatch(setEndDate(endDate));
  }

  render() {
    const {startDate, endDate} = this.state;
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DatePicker.default
          selected={startDate ? new Date(startDate) : null}
          onChange={this.handleStartDateChange}
          selectsStart
          startDate={startDate ? new Date(startDate) : null}
          endDate={endDate ? new Date(endDate) : null}
          dateFormat="dd/MM/yyyy"
        />
        <DatePicker.default
          selected={endDate ? new Date(endDate) : null}
          onChange={this.handleEndDateChange}
          selectsEnd
          startDate={startDate ? new Date(startDate) : null}
          endDate={endDate ? new Date(endDate) : null}
          minDate={startDate ? new Date(startDate) : null}
          dateFormat="dd/MM/yyyy"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);