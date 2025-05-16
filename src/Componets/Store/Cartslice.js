import { createSlice } from '@reduxjs/toolkit'


let initialState = JSON.parse(localStorage.getItem("cart")) || []
 const Cartslice =createSlice({
    name:"cart",
    initialState,
    reducers:{

        addtocart:(state,action) => {
            state.push(action.payload);
            localStorage.setItem("cart",JSON.stringify(state))
        },

        removetocart:(state,action) => {
            let rmv = state.filter((dd) => dd.id !== action.payload);
            localStorage.setItem("cart",JSON.stringify(rmv))
            return rmv;
        },

        increment:(state,action) => {
            let inct = state.find((ff) => ff.id === action.payload);
            if (inct){
                inct.quantity += 1;
            }

        },

        decrement:(state,action) => {
            let dnct = state.find((ss) => ss.id === action.payload);
            if (dnct && dnct.quantity > 1){
                dnct.quantity -= 1;
            }
        },




    },
 })
 

 export let { addtocart, removetocart, increment, decrement } = Cartslice.actions;

 export default Cartslice.reducer;


