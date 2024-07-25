import { createSlice } from "@reduxjs/toolkit";
import { getUserUnits } from "../actions/usersUnitsActions";

const usersUnitsSlice = createSlice({
  name: "usersUnits",
  initialState: {
    usersUnits: [],
    usersUnitsLoading: false,
    usersUnitsError: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getUserUnits.pending, (state) => {
      state.usersUnitsLoading = true;
    }),
      builder.addCase(getUserUnits.fulfilled, (state, action) => {
        state.usersUnitsLoading = false;
        state.usersUnits = action.payload;
      }),
      builder.addCase(getUserUnits.rejected, (state, action) => {
        state.usersUnitsLoading = false;
        console.log(action.payload);
        state.usersUnitsError = action.payload;
      });
  },
});

export default usersUnitsSlice.reducer;
