import { configureStore } from "@reduxjs/toolkit";

import componentSlice from "./component-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
    reducer: {component: componentSlice.reducer, cart: cartSlice.reducer}
})

export default store;