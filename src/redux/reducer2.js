import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLogged: false,
    isActive: false,
}

const authSlices = createSlice({
    name: 'auths',
    initialState,
    reducers: {
        login: state => {
            state.isLogged = true;
        },
        logout: state => {
            state.isLogged = false;
        },
        toggleClass: state => {
            state.isActive = !state.isActive;
        }
    }
});

export const { login, logout, toggleClass } = authSlices.actions;
export default authSlices.reducer;