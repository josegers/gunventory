import { createStore, combineReducers } from 'redux';
import Test from './Reducers/Test/Test.Reducer';

export function createGunventoryStore() {
  const reducers = combineReducers({
    Test,
  });
  return createStore(reducers);
}
