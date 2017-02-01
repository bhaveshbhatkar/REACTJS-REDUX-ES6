/**
 * Created by bhavesh_bhatkar on 11/15/16.
 */
import LinkComponent from '../quote/LinkComponent';

export let QUOTES_GRIDDLE_HEADER = [
  {
    "columnName": "id",
    "order": 1,
    "locked": false,
    "visible": true,
    "displayName": "Quote",
    "customComponent": LinkComponent
  },
  {
    "columnName": "description",
    "order": 3,
    "locked": false,
    "visible": true,
    "displayName":"Description"
  },
  {
    "columnName": "accountName",
    "order": 2,
    "locked": false,
    "visible": true,
    "displayName":"Account Name"
  },
  {
    "columnName": "comment",
    "order": 4,
    "locked": false,
    "visible": true,
    "displayName":"Comment"
  },
  {
    "columnName": "createdDate",
    "order": 5,
    "locked": false,
    "visible": true,
    "displayName":"Created Date"
  },
  {
    "columnName": "modifiedDate",
    "order": 6,
    "locked": false,
    "visible": true,
    "displayName":"Modified Date"
  }
];
