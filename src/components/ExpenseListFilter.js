import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filtersActions';

class ExpenseListFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calanderFocused: null
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onFocusChange(calanderFocused) {
    this.setState(() => {
      return {
        calanderFocused
      };
    });
  }

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              value={this.props.filters.text}
              placeholder="Type Something here.."
              className="text-input"
              onChange={e => {
                this.props.dispatch(setTextFilter(e.target.value));
              }}
            />
          </div>
          <div className="input-group__item">
            <select
              value={this.props.filters.sortBy}
              className="select-input"
              onChange={e => {
                if (e.target.value === 'date') {
                  this.props.dispatch(sortByDate(e.target.value));
                } else if (e.target.value === 'amount') {
                  this.props.dispatch(sortByAmount(e.target.value));
                }
              }}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
              endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calanderFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true} // clear button
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilter);
