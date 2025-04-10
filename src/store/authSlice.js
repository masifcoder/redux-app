import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        isLogin: false
    },
    reducers: {
        login: (state, action) => {
            if (action.payload.email == 'admin@gmail.com' && action.payload.password == '123') {
                state.isLogin = true;
            }
        },
        logout: (state) => {
            state.isLogin = false;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;