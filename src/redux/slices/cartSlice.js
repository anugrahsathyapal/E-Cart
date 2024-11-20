import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartItems',
    initialState : [],
    reducers : {
        addtoCart : (state,actionByComponent) => {   
            const existingProduct = state.find(item=>item.id==actionByComponent.payload.id)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice  = existingProduct.quantity * existingProduct.price //total  price created now
                const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
                state = [...remainingProducts,existingProduct]  //spreading remainingProducts
            } else {
                state.push({...actionByComponent.payload,quantity:1,totalPrice:actionByComponent.payload.price})
            }                    
        },
        incrementQuantity : (state,actionByCart) =>{ // actionByCart is there to get the id of that particular product from  the cart component
            const existingProduct = state.find(item=>item.id==actionByCart.payload)// id data in payload
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
            state = [...remainingProducts,existingProduct]
        },
        removeCartItem : (state,actionByCart) => {
            return state.filter(item=>item.id!=actionByCart.payload)
        },
        decrementQuantity : (state,actionByCart) =>{ // actionByCart is there to get the id of that particular product from  the cart component
            const existingProduct = state.find(item=>item.id==actionByCart.payload)// id data in payload
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
            state = [...remainingProducts,existingProduct]
        },
        emptyCart : (state) => {
            return state = []
        }


    } 
})

export const {addtoCart, incrementQuantity, removeCartItem, decrementQuantity, emptyCart} = cartSlice.actions
export default cartSlice.reducer