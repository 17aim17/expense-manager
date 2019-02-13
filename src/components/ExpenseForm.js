import React, { Component } from 'react';

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      note: '',
      amount: ''
    };
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
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
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => {
        return {
          amount: amount
        };
      });
    }
  }
  render() {
    return (
      <div>
        <form>
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
          <button type="submit">Add Expense</button>
        </form>
      </div>
    );
  }
}
