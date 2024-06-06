import { createSlice } from "@reduxjs/toolkit";
import { userLoginWithPhone } from "../actions/authActions";



const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        currentUser: {},
        token: null,
        loadingCurrentUser: false,
        errorCurrentUser: null
    },
    reducers: {
        signOutCurrentUser: (state, action) => {
            state.currentUser = {}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userLoginWithPhone.pending, (state, action) => {
            state.loadingCurrentUser = true
            state.errorCurrentUser = null
        }),
            builder.addCase(userLoginWithPhone.fulfilled, (state, action) => {
                state.loadingCurrentUser = false;
                state.currentUser = action.payload.user;
                state.token = action.payload.token
            }),
            builder.addCase(userLoginWithPhone.rejected, (state, action) => {
                state.loadingCurrentUser = false;
                state.errorCurrentUser = action.payload.errorMessage
            })
    }
})

export const { signOutCurrentUser } = AuthSlice.actions
export default AuthSlice.reducer