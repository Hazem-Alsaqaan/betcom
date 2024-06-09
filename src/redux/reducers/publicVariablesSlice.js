import { createSlice } from "@reduxjs/toolkit";

const publicVariablesSlice = createSlice({
    name: "publicVariables",
    initialState: {
        darkMood: false,
        english: false,
        maxPrice: 1,
        minPrice: 1,
        numberOfRooms: 1
    },
    reducers: {
        setDarkMood: (state) => {
            state.darkMood = !state.darkMood;
        },
        setLanguage: (state, action) => {
            state.english = !state.english;
        },
        setMaxPrice: (state, action)=>{
            state.maxPrice = action.payload
        },
        increaseMaxPrice: (state)=>{
            state.maxPrice = state.maxPrice += 1
        },
        decreaseMaxPrice: (state)=>{
            state.maxPrice > 1 &&  state.maxPrice--
        },
        setMinPrice: (state, action)=>{
            state.minPrice = action.payload
        },
        increaseMinPrice: (state)=>{
            state.minPrice = state.minPrice += 1
        },
        decreaseMinPrice: (state)=>{
            state.minPrice  > 1 &&  state.minPrice--
        },
        setNumberOfRooms: (state, action)=>{
            if(action.payload > 1 && action.payload < 20){
                state.numberOfRooms = action.payload
            }else{
                state.numberOfRooms = 1
            }
        },
        increaseNumberOfRooms: (state)=>{
            state.numberOfRooms < 20 &&  state.numberOfRooms++
        },
        decreaseNumberOfRooms: (state)=>{
            state.numberOfRooms > 1 &&  state.numberOfRooms--
        },
        resetValues: (state)=>{
            state.maxPrice = 1,
            state.minPrice = 1,
            state.numberOfRooms = 1
        }
    },
});

export const { 
    setDarkMood,
    setLanguage,
    setMaxPrice,
    setMinPrice,
    setNumberOfRooms,
    increaseMaxPrice,
    increaseMinPrice,
    increaseNumberOfRooms,
    decreaseMaxPrice,
    decreaseMinPrice,
    decreaseNumberOfRooms,
    resetValues
    } = publicVariablesSlice.actions;
export default publicVariablesSlice.reducer;
