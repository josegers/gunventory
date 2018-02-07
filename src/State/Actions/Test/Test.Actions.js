import * as ActionTypes from '../ActionTypes';

export function createActionSetDescription(description) {
  return {
    type: ActionTypes.TEST_SET_DESCRIPTION,
    payload: description,
  }
}