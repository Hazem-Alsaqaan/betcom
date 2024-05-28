import { createSlice } from "@reduxjs/toolkit";


const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        currentUser:{
            id: null,
            username: null,
            email: null,
        }
    },
    reducers:{
        setCurrentUser: (state, action)=>{
            state.currentUser = action.payload
        }
    }
})

export const {setCurrentUser} = AuthSlice.actions
export default AuthSlice.reducer