import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducer3';

const store3 = configureStore({
    reducer: rootReducer
});

export default store3;