import { configureStore } from "@reduxjs/toolkit";

import componentSlice from "./component-slice";

const store = configureStore({
    reducer: {component: componentSlice.reducer}
})

export default store;