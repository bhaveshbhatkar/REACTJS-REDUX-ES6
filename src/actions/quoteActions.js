/**
 * Created by bhavesh_bhatkar on 11/13/16.
 */

import * as types from './actionTypes';
import QuoteApi from '../api/mockQuoteApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function createQuote(quote) {
  return { type: types.CREATE_QUOTE_SUCCESS, quote};
}

export function loadQuotesSuccess(quotes) {
  return { type: types.LOAD_QUOTES_SUCCESS, quotes};
}

export function loadQuotes() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return QuoteApi.getAllQuotes().then(quotes => {
      dispatch(loadQuotesSuccess(quotes));
    }).catch(error => {
      throw(error);
    });
  };
}
