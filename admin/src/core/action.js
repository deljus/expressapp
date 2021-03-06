import * as CONST from './constants';

export const startRequest = () => ({
  type: CONST.START_REQUEST,
});

export const succsessRequest = () => ({
  type: CONST.SUCCESS_REQUEST,
});

export const errorRequest = errText => ({
  type: CONST.ERROR_REQUEST, errText,
});


export const addAccosiationTable = arr => ({
  type: CONST.ADD_ASSOCIATION_TABLE,
  arr,
});

export const addTable = (tableName, data, columns) => ({
  type: CONST.ADD_TABLE,
  tableName,
  data,
  columns,
});

export const addColumns = (tableName, columns) => ({
  type: CONST.ADD_TABLE_COLUMNS,
  tableName,
  columns,
});

export const deleteTableData = (tableName, id) => ({
  type: CONST.DELETE_TABLE_ITEM,
  tableName,
  id,
});