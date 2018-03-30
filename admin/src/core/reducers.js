import { combineReducers } from 'redux';
import * as CONST from './constants';

const requestState = {
  loading: false,
  error: false,
  errorText: '',
};

const request = (state = requestState, action) => {
  switch (action.type) {
    case CONST.START_REQUEST:
      return {
        loading: true,
        error: false,
        errorText: '',
      };

    case CONST.SUCCESS_REQUEST:
      return {
        loading: false,
        error: false,
        errorText: '',
      };

    case CONST.ERROR_REQUEST:
      return {
        loading: false,
        error: true,
        errorText: action.errText,
      };

    default:
      return state;
  }
};

const appRoutes = (state = [], action) => {
  switch (action.type) {
    case CONST.ADD_ASSOCIATION_TABLE:
      return action.arr;

    default:
      return state;
  }
};

export default combineReducers({
  request,
  appRoutes,
});