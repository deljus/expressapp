import { takeEvery, put, call } from 'redux-saga/effects';
import {
  startRequest,
  succsessRequest,
  errorRequest,
  addAccosiationTable,
  addTable,
  addColumns,
  deleteTableData
} from './action';

import {
  GET_ASSOCIATION_TABLE_SAGA,
  INIT_TABLE_SAGA,
  INIT_CREATE_TABLE_ITEM_SAGA,
  INIT_EDIT_TABLE_ITEM_SAGA,
  DELETE_TABLE_ITEM_SAGA,
} from './constants';
import * as REQ from './requests';

function* requestSaga(fn, action) {
  try {
    yield put(startRequest());
    yield call(fn, action);
    yield put(succsessRequest());
  } catch (e) {
    yield put(errorRequest(e.message));
  }
}

function* initRoutes() {
  const routes = yield call(REQ.getAccosiationTable);
  yield put(addAccosiationTable(routes.data));
}

function* initTables({ tableName }) {
  const tableData = yield call(REQ.getTableData, tableName);
  const tableColumns = yield call(REQ.getTableColumns, tableName);
  yield put(addTable(tableName, tableData.data, tableColumns.data));
}

function* initEditTable({ tableName, id }) {
  const tableData = yield call(REQ.getTableDataItem, tableName, id);
  const tableColumns = yield call(REQ.getTableColumns, tableName);
  yield put(addTable(tableName, tableData.data, tableColumns.data));
}

function* initCreateItemTable({ tableName }) {
  const tableColumns = yield call(REQ.getTableColumns, tableName);
  yield put(addColumns(tableName, tableColumns.data));
}

function* deleteTableItem({ tableName, id }) {
  yield put(deleteTableData(tableName, id))
}

export function* sagas() {
  yield takeEvery(GET_ASSOCIATION_TABLE_SAGA, requestSaga, initRoutes);
  yield takeEvery(INIT_TABLE_SAGA, requestSaga, initTables);
  yield takeEvery(INIT_EDIT_TABLE_ITEM_SAGA, requestSaga, initEditTable);
  yield takeEvery(INIT_CREATE_TABLE_ITEM_SAGA, requestSaga, initCreateItemTable);
  yield takeEvery(DELETE_TABLE_ITEM_SAGA, deleteTableItem);
}