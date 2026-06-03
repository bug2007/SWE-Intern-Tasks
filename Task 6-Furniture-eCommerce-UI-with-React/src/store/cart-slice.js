import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: { products: [], bigTotal: 0, showCartSidebar: false},  // products: [{id, title, quantity, price, totalPrice}]
    reducers: {
        addToCart(state, action) {
            const newProd = action.payload;
            const existingProd = state.products.find(product => product.id === newProd.id)
            state.bigTotal += newProd.quantity * newProd.price;
            if (!existingProd) {
                state.products.push({
                    id: newProd.id,
                    title: newProd.title,
                    quantity: newProd.quantity,
                    price: newProd.price,
                    totalPrice: newProd.price * newProd.quantity
                })
            } else {
                existingProd.quantity += newProd.quantity,
                existingProd.totalPrice += newProd.price * newProd.quantity
            }
        },  
        removeFromCart(state, action) {
            const id = action.payload.id;
            const deleteQuantity = action.payload;
            const existingProd = state.products.find(product => product.id === id);
            if ((deleteQuantity === 'full') || (deleteQuantity === 'one' && existingProd.quantity === 1)) {
                state.bigTotal -= existingProd.totalPrice;
                state.products = state.products.filter(product => product.id !== id)
            } else {
                existingProd.quantity--;
                existingProd.totalPrice -= existingProd.price;
                state.bigTotal -= existingProd.price;
            }
        },
        openCartSidebar(state) {
            state.showCartSidebar = true
        },
        closeCartSidebar(state) {
            state.showCartSidebar = false
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;