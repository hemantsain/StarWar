import {call, put, takeEvery} from 'redux-saga/effects';
import {ActionTypes} from './action-types';
import {doLogin, doPlanentSearch} from './api';

function* doLoginSaga(action) {
  try {
    const result = yield call(doLogin, action.payload);
    yield put({type: ActionTypes.DO_LOGIN_SUCCESS, result});
  } catch (error) {
    console.log('Do Login Error', error);
    yield put({type: ActionTypes.DO_LOGIN_ERROR, error});
  }
}

function* doPlanetSearchSaga(action) {
  try {
    const result = yield call(doPlanentSearch, action.payload);
    yield put({type: ActionTypes.DO_SEARCH_SUCCESS, result});
  } catch (error) {
    console.log('Do Planet Error', error);
    yield put({type: ActionTypes.API_ERROR, error});
  }
}

export default function* watchUserSaga() {
  yield takeEvery(ActionTypes.DO_LOGIN_REQUEST, doLoginSaga);
  yield takeEvery(ActionTypes.DO_SEARCH_REQUEST, doPlanetSearchSaga);
}
