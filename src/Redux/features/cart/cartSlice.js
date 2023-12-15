const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
cartItems : JSON.parse(localStorage.getItem('cart')) || []
};

// const existingCartItem = JSON.parse(localStorage.getItem('cart'))
// console.log(existingCartItem);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addToCart: (state, { payload }) => {
        //     const existingCartItem = JSON.parse(localStorage.getItem('cart'))
        //     console.log(existingCartItem);
        //     if (existingCartItem === null) {
        //         return { ...state, cartItem: payload }
        //     } else {
        //         const exists  = existingCartItem.find(bk => bk.id === payload.id);
        //         if (exists === undefined) {
        //             return {...state, cartItem: payload}
        //         } else {
        //             return {...state, cartItem: payload}
        //         }
        //     }
        // },
        // getToCart: (state) => {
        //     const existingCartItem = JSON.parse(localStorage.getItem('cart'))
        //     console.log(existingCartItem);
        //     if (existingCartItem === null) {
        //         return state;
        //     } else {
        //         return {...state, cartItem: existingCartItem}
        //     }
        // }
        addToCart: (state, action) => {
            const existingCartItem = state.cartItems.find(item => item.id === action.payload.id);
      
            if (!existingCartItem) {
              state.cartItems.push(action.payload);
            } else {
              existingCartItem.quantity++;
            }
      
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
          },
        deleteCartItem: (state, action) => {
        //     const reamingItems = cartItems.filter(ct => ct.book.title !== title)
        // setCartItems(reamingItems)

        state.cartItems = [action.payload]
        localStorage.setItem('cart', JSON.stringify(action.payload))
        }
    }
})

export const { addToCart, deleteCartItem} = cartSlice.actions;

export default cartSlice.reducer