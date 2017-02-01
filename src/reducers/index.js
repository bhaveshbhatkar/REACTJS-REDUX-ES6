/**
 * Created by bhavesh_bhatkar on 11/13/16.
 */
import {combineReducers} from 'redux';
import quotes from './quoteReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  quotes,
  ajaxCallsInProgress
});

export default rootReducer;
