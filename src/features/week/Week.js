import { DateTime } from 'luxon';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './weekSlice';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

export function Week() {
    const week = useSelector((state) => state.week.value);
    console.log(week)
    const dispatch = useDispatch();

    const dt = DateTime.now();
    const current = dt.set({ weekNumber: week });

    return (
        <div>
            <div>
                <button
                    aria-label="Decrement Value"
                    onClick={() => dispatch(decrement())}
                >
                    <MdArrowBack />
                </button>
                <span>{current.weekNumber}</span>
                <button
                    aria-label="Increment Value"
                    onClick={() => dispatch(increment())}
                >
                    <MdArrowForward />
                </button>
            </div>
        </div>
    );
}