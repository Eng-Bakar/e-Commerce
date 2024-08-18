import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Reducer/cart"
import storage from "redux-persist/lib/storage";    // first one 
import { persistReducer } from "redux-persist";  ///second one 
import { combineReducers } from "@reduxjs/toolkit"; //third one 


const StorageConfig = {
    key: "root",
    storage
}   //{/*storage congfig wuxuu qaataa laba value key storage key wxuu qaataa root */}
const AllReducers = combineReducers({
    Sallad: CartSlice
})   
const PersistFunction = persistReducer(StorageConfig,AllReducers)
const Store = configureStore({
    reducer:PersistFunction
})
export default Store

//configStorage ---> xogta ayuu kuu kaydina 