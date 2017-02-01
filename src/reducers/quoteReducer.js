/**
 * Created by bhavesh_bhatkar on 11/13/16.
 */

import initialState from './initialState';
import * as types from '../actions/actionTypes';


export default function quoteReducer(state = initialState.quotes, action) {
  switch (action.type) {
    case types.LOAD_QUOTES_SUCCESS:
      return action.quotes;
    case types.CREATE_QUOTE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.quote)
      ];
    default:
      return state;
  }
}
