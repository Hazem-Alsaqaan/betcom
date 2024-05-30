import { createSlice } from "@reduxjs/toolkit";

const publicVariablesSlice = createSlice({
    name: "publicVariables",
    initialState: {
        darkMood: false,
        english: false,
    },
    reducers: {
        setDarkMood: (state) => {
            state.darkMood = !state.darkMood;
        },
        setLanguage: (state, action) => {
            state.english = !state.english;
        },
    },
});

export const { setDarkMood, setLanguage } = publicVariablesSlice.actions;
export default publicVariablesSlice.reducer;
