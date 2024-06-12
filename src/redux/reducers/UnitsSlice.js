import { createSlice } from "@reduxjs/toolkit"
import { getAllUnits, getSpecificUnit, searchUnits } from "../actions/UnitsActions"


const UnitsSlice = createSlice({
    name: "units",
    initialState: {
        allUnits: [],
        allUnitsLoading: false,
        allUnitsError: null,
        specificUnit: {},
        specificUnitLoading: false,
        specificUnitError: null,
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
        }),
        // Get Specific Unit By Unit_Id
        builder.addCase(getSpecificUnit.pending, (state, action)=>{
            state.specificUnitLoading = true;
            state.specificUnitError = null
        }),
        builder.addCase(getSpecificUnit.fulfilled, (state, action)=>{
            state.specificUnitLoading = false;
            if(Object.keys(action.payload).length > 0){state.specificUnit = action.payload}
        }),
        builder.addCase(getSpecificUnit.rejected, (state, action)=>{
            state.specificUnitLoading = false;
            state.specificUnitError = action.payload.errorMessage
        })
    }
})

export default UnitsSlice.reducer