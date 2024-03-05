import { createSlice } from "@reduxjs/toolkit";



const cartSlice=createSlice({
    name: "cartSlice",
    initialState: {
        name: "Fall Limited Edition Sneakers",
        price: 125,
        count: 1,
        totalPrice: 125,
        imageIndex: 0,
        added: false,
    },
    reducers:{
        incrementCount: (state)=>{
            state.count++
        },
        decrementCount: (state)=>{
            state.count--
        },
        addToCart: (state)=>{
            state.added=!state.added
        },
        changeImgIndex: (state, action)=>{
            console.log(action);
            state.imageIndex=action.payload
        }
    }
})
export default cartSlice