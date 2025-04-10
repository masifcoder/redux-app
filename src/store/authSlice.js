import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        isLogin: true
    },
    reducers: {
        login: (state) => {
            state.isLogin = true;
        },
        logout: (state) => {
            state.isLogin = false;
        }
    }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;