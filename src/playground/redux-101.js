import {configureStore} from '@reduxjs/toolkit';

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({count = 0} = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const counterReducer = (state = {count: 0}, action) => {
  switch(action.type) {
    case 'INCREMENT': 
      return { ...state, count: state.count + action.incrementBy};
    case 'DECREMENT':
      return { ...state, count: state.count - action.decrementBy};
    case 'SET':
      return { ...state, count: action.count};
    case 'RESET':
      return {...state, count: 0};
    default :
      return state;
  }
};

const store = configureStore({
  reducer: counterReducer,
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({count: 101}));