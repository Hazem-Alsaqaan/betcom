import { createSlice } from "@reduxjs/toolkit"


const publicVariablesSlice = createSlice({
    name: "publicVariables",
    initialState:{
        userSkipLogging: false
    },
    reducers:{
        setUserSkipLogging: (state)=>{
            state.userSkipLogging = true
        }
    }
})

export const {setUserSkipLogging} = publicVariablesSlice.actions
export default publicVariablesSlice.reducer