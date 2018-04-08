import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import * as CONST from './constants';
import _ from 'lodash';

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

const tables = (state = {}, { type, tableName, data, columns, id }) => {
  switch (type) {
    case CONST.ADD_TABLE:
      return {...state, [tableName]: {data, columns } };
    case CONST.ADD_TABLE_COLUMNS:
      return { ...state, [tableName]: { columns } };
    case CONST.DELETE_TABLE_ITEM:
      return { ...state };
    default:
      return state;
  }
};

export default combineReducers({
  request,
  appRoutes,
  tables,
  form,
});