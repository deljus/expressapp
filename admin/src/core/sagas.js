import { takeEvery, put, call } from 'redux-saga/effects';
import { startRequest, succsessRequest, errorRequest, addAccosiationTable } from './action';
import {GET_ASSOCIATION_TABLE_SAGA} from './constants';
import * as REQ from './requests';


function* initRoutes() {
  try {
    yield put(startRequest());
    const tables = yield call(REQ.getAccosiationTable);
    yield put(addAccosiationTable(tables.data));
    yield put(succsessRequest());
  } catch (e) {
    yield put(errorRequest(e.message));
  }
}

export function* sagas() {
  yield takeEvery(GET_ASSOCIATION_TABLE_SAGA, initRoutes);
}