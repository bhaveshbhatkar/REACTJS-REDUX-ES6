/**
 * Created by bhavesh_bhatkar on 11/15/16.
 */
import delay from './delay';

const quotes = [
  {
    "id": 1234,
    "description": "This is SKU1 for Customer1",
    "accountName": "Customer1",
    "createdDate": "11/05/2016",
    "modifiedDate": "11/06/2016",
    "comment":"This is in Progress , need  modifications ...",
    "quoteLineItems":[]
  },
  {
    "id": 3456,
    "accountName": "Customer2",
    "createdDate": "11/14/2016",
    "modifiedDate": "11/14/2016",
    "description": "This is SKU1 for Customer2",
    "comment":"This is in Progress , need  modifications ..."
  },
  {
    "id": 6785,
    "accountName": "Customer3",
    "createdDate": "11/14/2016",
    "modifiedDate": "11/14/2016",
    "description": "This is SKU1 for Customer3",
    "comment":"This is in Progress , need  modifications ..."
  },
  {
    "id": 7865,
    "accountName": "Customer4",
    "createdDate": "11/14/2016",
    "modifiedDate": "11/14/2016",
    "description": "This is SKU1 for Customer4",
    "comment":"This is in Progress , need  modifications ..."
  },
  {
    "id": 8769,
    "accountName": "Customer5",
    "createdDate": "11/14/2016",
    "modifiedDate": "11/14/2016",
    "description": "This is SKU1 for Customer5",
    "comment":"This is in Progress , need  modifications ..."
  },
  {
    "id": 8759,
    "accountName": "Customer6",
    "createdDate": "11/14/2016",
    "modifiedDate": "11/14/2016",
    "description": "This is SKU1 for Customer6",
    "comment":"This is in Progress , need  modifications ..."
  },
  {
    "id": 9876,
    "accountName": "Customer7",
    "createdDate": "11/14/2016",
    "modifiedDate": "11/14/2016",
    "description": "This is SKU1 for Customer7",
    "comment":"This is in Progress , need  modifications ..."
  },
  {
    "id": 9867,
    "accountName": "Customer8",
    "createdDate": "11/14/2016",
    "modifiedDate": "11/14/2016",
    "description": "This is SKU1 for Customer8",
    "comment":"This is in Progress , need modifications ..."
  }
];

class QuoteApi {
  //Get all Quotes
  static getAllQuotes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], quotes));
      }, delay);
    });
  }

  static saveQuote(quote) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, quote));
      }, delay);
    });
  }

  static deleteQuote(quoteId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const quoteId = quotes.findIndex(quote => {
          quote.quoteId = quoteId;
        });
        quotes.splice(quoteId, 1);
        resolve();
      }, delay);
    });
  }

}

export default QuoteApi;
