import { createSlice } from '@reduxjs/toolkit';

const componentSlice = createSlice({
    name: 'componentSlice',
    initialState: { currentComponent: 'Home', selectedProduct: null },
    reducers: {
        changePage(state, action) {
            state.currentComponent = action.payload;
        },
        selectProduct(state, action) {
            state.selectedProduct = action.payload;
        }
    }
})

export const componentSliceActions = componentSlice.actions;
export default componentSlice;

