import { createSlice } from "@reduxjs/toolkit";
import Product from "../../Components/Product";
import Cart  from "../../Pages/Cart";
const CartSlice = createSlice ({
    name: "Sallad",
    initialState:{

        items:[],
        TotalPrice: 0
    },
    //state --> waa magac kumeel gaar ah 
    // action --> waa shaqo laqabanooyo 
    reducers:{
        AddItemToSalada:(state, action) => {
            state.items.push(action.payload)
        },
        CalculateTotalPrice: (state) => {
            let total = 0
            state.items.forEach((Product) => {
                total += Product.price
            })
            state.TotalPrice = total
        },
        RemoveItemFromCart: (state, action) => {
            state.items = state.items.filter((Product) => Product.id != action.payload.id)
        }
    }
})
export const {AddItemToSalada} = CartSlice.actions
export const {CalculateTotalPrice, RemoveItemFromCart} = CartSlice.actions
export default CartSlice.reducer