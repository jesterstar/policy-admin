import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import policyGroupReducer from './policyGroupReducer';

export default combineReducers({
  routing: routerReducer,
  policyGroupReducer
});