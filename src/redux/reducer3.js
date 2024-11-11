import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    isActive: false
}

const defaultSlice = createSlice({
    name: 'default',
    initialState,
    reducers: {
        login: state => {
            state.isLoggedIn = true;
        },
        logout: state => {
            state.isLoggedIn = false;
        },
        toggleClass: state => {
            state.isActive = !state.isActive;
        }
    }
});

export const { login, logout, toggleClass } = defaultSlice.actions;
export default defaultSlice.reducer;