import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: { products: [], bigTotal: 0, showCartSidebar: false, totalQuantity: 0, notification: null},  // products: [{id, title, quantity, price, totalPrice}]
    reducers: { 
        addToCart(state, action) {
            const newProd = action.payload;
            const existingProd = state.products.find(product => product.id === newProd.id)
            state.bigTotal += newProd.quantity * newProd.price;
            state.totalQuantity += newProd.quantity;
            if (!existingProd) {
                state.products.push({
                    id: newProd.id,
                    title: newProd.title,
                    quantity: newProd.quantity,
                    price: newProd.price,
                    imgSrc: newProd.imgSrc,
                    totalPrice: newProd.price * newProd.quantity
                })
            } else {
                existingProd.quantity += newProd.quantity,
                existingProd.totalPrice += newProd.price * newProd.quantity
            }
            state.notification = {id: Date.now(), message: `Added ${newProd.quantity} ${newProd.title} to cart successfully!`};
        },  
        removeFromCart(state, action) {
            const id = action.payload.id;
            const deleteQuantity = action.payload.quantity;
            const existingProd = state.products.find(product => product.id === id);
            let removedQuantity = 1;
            if ((deleteQuantity === 'full') || (deleteQuantity === 'one' && existingProd.quantity === 1)) {
                removedQuantity = existingProd.quantity;
                state.bigTotal -= existingProd.totalPrice;
                state.products = state.products.filter(product => product.id !== id)
                state.totalQuantity -= existingProd.quantity
            } else {
                existingProd.quantity--;
                existingProd.totalPrice -= existingProd.price;
                state.bigTotal -= existingProd.price;
                state.totalQuantity--;
            }
            state.notification = {id: Date.now(), message: `Removed ${removedQuantity} ${existingProd.title} from cart successfully!`};
        },
        openCartSidebar(state) {
            state.showCartSidebar = true
        },
        closeCartSidebar(state) {
            state.showCartSidebar = false
        },
        clearCart(state) {
           state.products = [];
           state.bigTotal = 0; 
        },
        clearNotification(state) {
            state.notification = null;
        }
    }
})


export const cartActions = cartSlice.actions;
export default cartSlice;