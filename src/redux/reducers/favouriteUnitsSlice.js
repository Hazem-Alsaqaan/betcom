import { createSlice } from "@reduxjs/toolkit";
import {
  addFavouritesUnit,
  getFavouritesUnit,
  removeFavouritesUnit,
} from "../actions/favouriteUnitsAction";

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
    // Add favourites unites
    builder.addCase(addFavouritesUnit.pending, (state, action) => {
      state.favouriteUnitLoading = true;
    }),
      builder.addCase(addFavouritesUnit.fulfilled, (state, action) => {
        state.favouriteUnitLoading = false;
      }),
      builder.addCase(addFavouritesUnit.rejected, (state, action) => {
        state.favouriteUnitLoading = false;
        state.favouriteUnitError = action.payload;
      });
    // Remove favourites unites
    builder.addCase(removeFavouritesUnit.pending, (state, action) => {
      state.favouriteUnitLoading = true;
    }),
      builder.addCase(removeFavouritesUnit.fulfilled, (state, action) => {
        state.favouriteUnitLoading = false;
      }),
      builder.addCase(removeFavouritesUnit.rejected, (state, action) => {
        state.favouriteUnitLoading = false;
        state.favouriteUnitError = action.payload;
      });
  },
});

export default favouriteUnitsSlice.reducer;
