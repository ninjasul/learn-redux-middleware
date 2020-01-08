import React from 'react';
import Counter from "../components/Counter";
import {useDispatch, useSelector} from "react-redux";
import {decreaseAsync, increaseAsync} from "../modules/counter";

function CounterContainer() {
    // useSelector 는 리덕스 스토어의 상태를 조회하는 Hook임.
    // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일함.
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increaseAsync());
    };

    const onDecrease = () => {
        dispatch(decreaseAsync());
    };

    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    );
}

export default CounterContainer;