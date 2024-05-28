import { configureStore } from "@reduxjs/toolkit"
import publicVariablesSlice from "./reducers/publicVariablesSlice"
import AuthSlice from "./reducers/AuthSlice"

const store = configureStore({
    reducer:{
        publicVariablesSlice: publicVariablesSlice,
        AuthSlice: AuthSlice,
    }
})

export default store