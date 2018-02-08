import { createStore, combineReducers } from 'redux';
import Test from './Reducers/Test/Test.Reducer';
import GunInventory from './Reducers/GunInventory/GunInventory.Reducer';

export function createGunventoryStore() {
  const reducers = combineReducers({
    Test,
    GunInventory,
  });
  return createStore(reducers);
}
