import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            if (!existingItem) {
                state.totalQuantity++;
                state.items.push({
                    id: newItem.id,
                    image: newItem.imageId,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
            state.totalQuantity--;
        },

        increaseQuantity(state, action) {
            const id = action.payload;
            const item = state.items.find((item) => item.id === id);
            if (item) {
                item.quantity++;
                item.totalPrice += item.price;
            }
        },

        decreaseQuantity(state, action) {
            const id = action.payload;
            const item = state.items.find((item) => item.id === id);
            if (item) {
                if (item.quantity === 1) {
                    state.items = state.items.filter((item) => item.id !== id);
                    state.totalQuantity--;
                } else {
                    item.quantity--;
                    item.totalPrice -= item.price;
                }
            }
        },
    },
});

export const { addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
