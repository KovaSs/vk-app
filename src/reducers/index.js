import { combineReducers } from 'redux';
import { pageReduser } from './page';
import { userReduser } from './user';

export const rootReduser = combineReducers({
  page: pageReduser,
  user: userReduser
})