import { createSlice } from "@reduxjs/toolkit"


const publicVariablesSlice = createSlice({
    name: "publicVariables",
    initialState:{
        darkMood: false
    },
    reducers:{
        setDarkMood: (state)=>{
            state.darkMood = !state.darkMood
        }
    }
})

export const {setDarkMood} = publicVariablesSlice.actions
export default publicVariablesSlice.reducer