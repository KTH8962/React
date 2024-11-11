import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducer2';

const stores = configureStore({
    reducer: rootReducer
});

export default stores;