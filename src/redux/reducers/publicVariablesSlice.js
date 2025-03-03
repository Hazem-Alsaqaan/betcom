import { createSlice } from "@reduxjs/toolkit";

const publicVariablesSlice = createSlice({
  name: "publicVariables",
  initialState: {
    darkMood: false,
    english: false,
    minPrice: 0,
    maxPrice: 0,
    numberOfRooms: 0,
  },
  reducers: {
    setDarkMood: (state) => {
      state.darkMood = !state.darkMood;
    },
    setLanguage: (state, action) => {
      state.english = !state.english;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    increaseMaxPrice: (state) => {
      state.maxPrice++;
    },
    decreaseMaxPrice: (state) => {
      state.maxPrice > 0 && state.maxPrice--;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    increaseMinPrice: (state) => {
      state.minPrice++;
    },
    decreaseMinPrice: (state) => {
      state.minPrice > 0 && state.minPrice--;
    },
    setNumberOfRooms: (state, action) => {
      if (action.payload > 0 && action.payload < 20) {
        state.numberOfRooms = action.payload;
      } else {
        state.numberOfRooms = 0;
      }
    },
    increaseNumberOfRooms: (state) => {
      state.numberOfRooms < 20 && state.numberOfRooms++;
    },
    decreaseNumberOfRooms: (state) => {
      state.numberOfRooms > 0 && state.numberOfRooms--;
    },
    resetValues: (state) => {
      (state.maxPrice = 0), (state.minPrice = 0), (state.numberOfRooms = 0);
    },
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
  resetValues,
} = publicVariablesSlice.actions;
export default publicVariablesSlice.reducer;
