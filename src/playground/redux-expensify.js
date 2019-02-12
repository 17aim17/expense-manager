import { createStore, combineReducers } from 'redux';
import uuidv1 from 'uuid/v1';

// ============================
// Actions Generators
// ============================
//Add_Expenses
const addExpenses = ({ description = '', note = '', amount = 0 } = {}) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuidv1(),
      description,
      note,
      amount,
      createAt: new Date().getTime()
    }
  };
};
// Remove_Expenses
const removeExpenses = ({ id } = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id: id
  };
};

// Edit_Expenses

const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  };
};

// ============================
// Filters reducers
// ============================

// Set_Text_Filter
const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text
  };
};

// SortBy_Date
const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  };
};

// SortBy_Amount
const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  };
};

// Set_Start_Date
const setStartDate = (startDate = undefined) => {
  return {
    type: 'SET_START_DATE',
    startDate
  };
};

// Set_End_Date
const setEndDate = (endDate = undefined) => {
  return {
    type: 'SET_END_DATE',
    endDate
  };
};

// ============================
//  Expenses reducer
// ============================
const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// ============================
// Filters reducers
// ============================
const filtersReducerDefaultSate = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultSate, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// ============================
// get Visible expenses
// ============================

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createAt >= startDate;

      const endDateMatch =
        typeof endDate !== 'number' || expense.createAt <= endDate;

      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createAt < b.createAt ? 1 : -1;
      }
      if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

// ============================
// store Creation
// ============================
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// Exepnse Actions
// ====================
const expense2 = store.dispatch(
  addExpenses({ description: 'Coffee', amount: 200 })
);
const expense1 = store.dispatch(
  addExpenses({ description: 'Rent', note: 'World', amount: 100 })
);
const expense3 = store.dispatch(
  addExpenses({ description: 'Rent', note: 'World', amount: 10 })
);

// store.dispatch(removeExpenses({ id: expense1.expense.id }));

store.dispatch(editExpense(expense2.expense.id, { amount: 5000 }));

// Filters Actions
// ====================
// store.dispatch(setTextFilter('Rent'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(1549966613990));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1549966613992));
// store.dispatch(setEndDate());

// ==========================
// demo
// ==========================

// const demoState = {
//   expenses: [
//     {
//       id: 'asdfghjgf',
//       description: 'hkf  cjevrv',
//       note: 'Thisdfgkhn  rikhe vrtjrlg',
//       amount: 23400,
//       createdAt: 0
//     }
//   ],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', // amount date,
//     startDate: undefined,
//     endDate: undefined
//   }
// };

// const user = {
//   name: 'Ashish',
//   age: 19
// };
// console.log({
//   age: 27,
//   ...user,
//   locaion: 'Sonipat',
//   name: 'Ash'
// });
