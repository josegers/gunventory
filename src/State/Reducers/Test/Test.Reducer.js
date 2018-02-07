import * as ActionTypes from '../../Actions/ActionTypes';

const INITIAL_STATE = {
  title: 'Test title',
  description: 'initial description',
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.TEST_SET_DESCRIPTION: {
      return {
        ...state,
        description: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}