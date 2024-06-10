import { configureStore } from "@reduxjs/toolkit"
import publicVariablesSlice from "./reducers/publicVariablesSlice"
import AuthSlice from "./reducers/AuthSlice"
import UnitsSlice from "./reducers/UnitsSlice"

const store = configureStore({
    reducer:{
        publicVariablesSlice: publicVariablesSlice,
        AuthSlice: AuthSlice,
        UnitsSlice: UnitsSlice
    }
})

export default store