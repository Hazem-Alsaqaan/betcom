import { createSlice } from "@reduxjs/toolkit"
import { getAllUnits, searchUnits } from "../actions/UnitsActions"


const UnitsSlice = createSlice({
    name: "units",
    initialState: {
        allUnits: [],
        allUnitsLoading: false,
        allUnitsError: null
    },
    extraReducers: (builder)=>{
        builder.addCase(getAllUnits.pending, (state, action)=>{
            state.allUnitsLoading = true;
            state.allUnitsError = null
        })
        builder.addCase(getAllUnits.fulfilled, (state, action)=>{
            state.allUnitsLoading = false,
            state.allUnits = action.payload
        })
        builder.addCase(getAllUnits.rejected, (state, action)=>{
            state.allUnitsLoading = false
            state.allUnitsError = action.payload.errorMessage
        })
        // SEARCH IN UNITS BY MIN AND MAX PRICE 
        builder.addCase(searchUnits.pending, (state, action)=>{
            state.allUnitsLoading = true;
            state.allUnitsError = null
        })
        builder.addCase(searchUnits.fulfilled, (state, action)=>{
            state.allUnitsLoading = false,
            state.allUnits = action.payload
        })
        builder.addCase(searchUnits.rejected, (state, action)=>{
            state.allUnitsLoading = false
            state.allUnitsError = action.payload.errorMessage
        })
    }
})

export default UnitsSlice.reducer