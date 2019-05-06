import uuidv1 from 'uuid/v1';
import database from '../firebase/firebase';

// our proceess
// component calls action generators
// action generator returns Object
// component dispatces Object
// redux store changes

// Async Actions
// component calls action generators
// action generator returns functions
// component dispatches functions (?)
// function runs (has the ability to dispatch other actions and do whatever it wants)

//Add_Expenses
export const addExpenses = expense => {
  return {
    type: 'ADD_EXPENSE',
    expense
  };
};

export const startAddExpenses = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(addExpenses({ id: ref.key, ...expense }));
      });
  };
};

// Remove_Expenses
export const removeExpense = ({ id } = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id: id
  };
};

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

// Edit_Expenses
export const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  };
};

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .update({ ...updates })
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

// SET_EXPENSES
export const setExpenses = expenses => {
  return {
    type: 'SET_EXPENSES',
    expenses
  };
};

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once('value')
      .then(snapshot => {
        const expenses = [];

        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
