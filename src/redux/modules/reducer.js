import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import {reducer as form} from 'redux-form';
import info from './info';

export default combineReducers({
  router: routerStateReducer,
  form,
  info
});
