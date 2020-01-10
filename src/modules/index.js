import {combineReducers} from "redux";
import counter, {counterSaga} from "./counter";
import posts from "./posts";
import {all} from 'redux-saga/effects';

// 여러 개의 리듀서를 한꺼번에 전달 받기 위한 방법
const rootReducer = combineReducers({ counter, posts });

export function* rootSaga() {
    yield all([counterSaga()]);
}
export default rootReducer;