import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment().format('ddd , MMM Do YYYY');
console.log(now);

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    const expense = props.expense;
    this.state = {
      description: expense ? expense.description : '',
      note: expense ? expense.note : '',
      amount: expense ? (expense.amount / 100).toString() : '',
      createdAt: expense ? moment(expense.createdAt) : moment(),
      calanderFocused: false,
      error: ''
    };
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onDescriptionChange(e) {
    const description = e.target.value;
    this.setState(() => {
      return {
        description: description
      };
    });
  }
  onNoteChange(e) {
    const note = e.target.value;
    this.setState(() => {
      return {
        note: note
      };
    });
  }
  onAmountChange(e) {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => {
        return {
          amount: amount
        };
      });
    }
  }
  onDateChange(createdAt) {
    if (createdAt) {
      this.setState(() => {
        return {
          createdAt: createdAt
        };
      });
    }
  }
  onFocusChange({ focused }) {
    this.setState(() => {
      return {
        calanderFocused: focused
      };
    });
  }
  onSubmit(e) {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      // Set error state
      this.setState(() => {
        return {
          error: 'Please provide description and Amount'
        };
      });
    } else {
      this.setState(() => {
        return {
          error: ''
        };
      });
      this.props.onSubmit({
        //this is the props coming from AddExpensePage
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="description"
            autoFocus
            autoComplete="false"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            autoComplete="false"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Add A Note (Optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <SingleDatePicker
            date={this.state.createdAt} // momentPropTypes.momentObj or null
            onDateChange={this.onDateChange} // PropTypes.func.isRequired
            focused={this.state.calanderFocused} // PropTypes.bool
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
            id="datePicker" // PropTypes.string.isRequired,
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <button type="submit">Add Expense</button>
        </form>
      </div>
    );
  }
}
