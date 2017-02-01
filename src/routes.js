import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import QuoteDetailPage from './components/quote/QuoteDetailPage';
import AccountInfo from './components/quote/AccountInfo';
import CurrentOpportunity from './components/quote/CurrentOpportunity';
import PreviousOpportunity from './components/quote/PreviousOpportunity';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/quote" component={QuoteDetailPage} />
    <Route path="/quote/:id" component={QuoteDetailPage} />
    <Route path="/quote/:id/account" component={AccountInfo} />
    <Route path="/quote/:id/currentopp" component={CurrentOpportunity} />
    <Route path="/quote/preopp" component={PreviousOpportunity} />
    <Route path="/quote/:id/preopp" component={PreviousOpportunity} />
  </Route>
);
