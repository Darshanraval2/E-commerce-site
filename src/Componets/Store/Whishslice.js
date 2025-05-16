import { createSlice } from "@reduxjs/toolkit";

const Wishslice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWish: (state, action) => {
      const exist = state.find(item => item.id === action.payload.id);
      if (!exist) {
        state.push(action.payload);
      }
    },
    removeFromWish: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    }
  }
});

export const { addToWish, removeFromWish } = Wishslice.actions;
export default Wishslice.reducer;
