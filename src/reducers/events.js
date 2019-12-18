import _ from 'lodash';
import  { READ_EVENS } from '../actions';

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENS:
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}

