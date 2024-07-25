import { configureStore } from "@reduxjs/toolkit";
import publicVariablesSlice from "./reducers/publicVariablesSlice";
import AuthSlice from "./reducers/AuthSlice";
import UnitsSlice from "./reducers/UnitsSlice";
import favouriteUnitsSlice from "./reducers/favouriteUnitsSlice";

const store = configureStore({
  reducer: {
    publicVariablesSlice: publicVariablesSlice,
    AuthSlice: AuthSlice,
    UnitsSlice: UnitsSlice,
    favouriteUnitsSlice: favouriteUnitsSlice,
  },
});

export default store;
