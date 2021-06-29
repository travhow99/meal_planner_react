import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import weekReducer from '../features/week/weekSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        week: weekReducer,
    },
});