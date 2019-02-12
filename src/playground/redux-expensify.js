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
// store Creation
// ============================
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

// // Exepnse Actions
// const expense1 = store.dispatch(
//   addExpenses({ description: 'Hello', note: 'World', amount: 100 })
// );

// const expense2 = store.dispatch(
//   addExpenses({ description: 'Wordl', amount: 200 })
// );

// store.dispatch(removeExpenses({ id: expense1.expense.id }));

// store.dispatch(editExpense(expense2.expense.id, { amount: 5 }));

// // Filters Actions

// store.dispatch(setTextFilter('Rent'));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());

store.dispatch(setEndDate(1250));
store.dispatch(setEndDate());

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

const user = {
  name: 'Ashish',
  age: 19
};
console.log({
  age: 27,
  ...user,
  locaion: 'Sonipat',
  name: 'Ash'
});
