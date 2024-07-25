import { createSlice } from "@reduxjs/toolkit";
import { getFavouritesUnit } from "../actions/favouriteUnitsAction";

const favouriteUnitsSlice = createSlice({
  name: "favouriteUnits",
  initialState: {
    favouriteUnits: [],
    favouriteUnitLoading: false,
    favouriteUnitError: null,
  },
  extraReducers: (builder) => {
    // Get favourites unites
    builder.addCase(getFavouritesUnit.pending, (state, action) => {
      state.favouriteUnitLoading = true;
    }),
      builder.addCase(getFavouritesUnit.fulfilled, (state, action) => {
        state.favouriteUnitLoading = false;
        state.favouriteUnits = action.payload;
      }),
      builder.addCase(getFavouritesUnit.rejected, (state, action) => {
        state.favouriteUnitLoading = false;
        state.favouriteUnitError = action.payload.errorMessage;
      });
  },
});

export default favouriteUnitsSlice.reducer;
