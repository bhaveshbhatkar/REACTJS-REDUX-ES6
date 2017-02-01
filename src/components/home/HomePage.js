import React from 'react';
import {Link, IndexLink} from 'react-router';
import QuoteGridPage from '../quote/QuoteGridPage';

class HomePage extends React.Component {
  render() {
    return (
      <div className="container-content">
        <div className="quote-title">
          <div className="home-actions">
          </div>
          <div className="quote-name">Pricing Tool - Quotes</div>
        </div>
        <QuoteGridPage />
      </div>
    );
  }
}

export default HomePage;
