const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

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
