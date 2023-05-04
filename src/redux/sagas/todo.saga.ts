import { call, delay, put, takeLatest, takeLeading } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { addItemReq, addItemRes } from '../actions/todo.action';
import { Action } from '../../types/redux.type';

function* addTodoSaga(action: Action<string>) {
	console.log(action);
	yield delay(2000);
	yield put(addItemRes(action.payload));
}
export function* todoSaga() {
	yield takeLeading(addItemReq, addTodoSaga);
}
