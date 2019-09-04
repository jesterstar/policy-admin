import {
  INITIAL_STATE,
  POLICY_ACTION
} from './../types.js';

export default function policyGroupReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case POLICY_ACTION:
      return { ...state, policyGroup: action.policyGroup };
    default:
      return state;
  }
}