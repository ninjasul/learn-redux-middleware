import { delay, put, takeEvery, takeLeading } from 'redux-saga/effects';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const INCREASE_ASYNC_SAGA = 'INCREASE_ASYNC_SAGA';
const DECREASE_ASYNC_SAGA = 'DECREASE_ASYNC_SAGA';

export const increase = () => ({
    type: INCREASE
});

export const decrease = () => ({
    type: DECREASE
});

// getState 를 사용하지 않을 경우 생략 가능
export const increaseAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(increase());
    }, 1000);
};

export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease());
    }, 1000);
};

export const increaseAsyncSaga = () => ({ type: INCREASE_ASYNC_SAGA });
export const decreaseAsyncSaga = () => ({ type: DECREASE_ASYNC_SAGA });

function* increaseSaga() {
    yield delay(1000);
    yield put(increase());
}

function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC_SAGA, increaseSaga);
    yield takeLeading(DECREASE_ASYNC_SAGA, decreaseSaga);
}

const initialState = 0;

export default function counter(state = initialState, action) {
    switch(action.type) {
        case INCREASE:
            return state + 1;

        case DECREASE:
            return state - 1;

        default:
            return state;
    }
};
