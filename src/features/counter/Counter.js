import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button
                    aria-label="Decrement Value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <span>{count}</span>
                <button
                    aria-label="Increment Value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
            </div>
        </div>
    )
}