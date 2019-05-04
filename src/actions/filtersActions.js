// Set_Text_Filter
export const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text
  };
};

// SortBy_Date
export const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  };
};

// SortBy_Amount
export const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  };
};

// Set_Start_Date
export const setStartDate = (startDate = undefined) => {
  return {
    type: 'SET_START_DATE',
    startDate
  };
};

// Set_End_Date
export const setEndDate = (endDate = undefined) => {
  return {
    type: 'SET_END_DATE',
    endDate
  };
};
