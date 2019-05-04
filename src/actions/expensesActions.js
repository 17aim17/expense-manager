import uuidv1 from 'uuid/v1';

//Add_Expenses
export const addExpenses = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuidv1(),
      description,
      note,
      amount,
      createdAt
    }
  };
};

// Remove_Expenses
export const removeExpenses = ({ id } = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id: id
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
