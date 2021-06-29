import { createSlice } from "@reduxjs/toolkit";
import { DateTime } from 'luxon';

const dt = DateTime.now();

export const weekSlice = createSlice({
    name: 'week',
    initialState: {
        value: dt.weekNumber,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    }
});

export const { increment, decrement, incrementByAmount } = weekSlice.actions;
export default weekSlice.reducer;