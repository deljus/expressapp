import { takeEvery, put, call } from 'redux-saga/effects';
import { startRequest, succsessRequest, errorRequest, addAccosiationTable, addTable } from './action';
import {GET_ASSOCIATION_TABLE_SAGA, INIT_TABLE_SAGA} from './constants';
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

function* initTables(action) {
  const tableData = yield call(REQ.getTable, action.tableName);
  yield put(addTable(action.tableName, tableData.data));
}

export function* sagas() {
  yield takeEvery(GET_ASSOCIATION_TABLE_SAGA, requestSaga, initRoutes);
  yield takeEvery(INIT_TABLE_SAGA, requestSaga, initTables)
}