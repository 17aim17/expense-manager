import { createStore } from 'redux';
import '../styles/styles.scss';

// Action generators

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy: incrementBy
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy: decrementBy
  };
};

const setCount = ({ count }) => {
  return {
    type: 'SET',
    count: count
  };
};

const resetCount = () => {
  return {
    type: 'RESET'
  };
};

// Reduceres
// 1.) Are Pure Function
//  const add =(a,b)=>a+b
// 2.) Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

// watching for store changes
const store = createStore(countReducer);

// watching for store changes
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - an object that gets sent to the store

// unsubscribe();

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 2 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 100 }));

store.dispatch(incrementCount({ incrementBy: 5 }));
