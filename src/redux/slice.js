import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: [],
};
const { v4: uuidv4 } = require("uuid");
const slice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocal(state, action) {
      console.log(action);
      state.location.push({
        id: uuidv4(),
        product: action.payload.formData.product,
        shop: action.payload.formData.shop,
        site: action.payload.formData.site,
        floor: action.payload.formData.floor,
        room: action.payload.formData.room,
      });
    },

    // removeLocal(state, action) {
    //   localStorage.setItem("token", action.payload.token);
    //   state.token = action.payload.token;
    // },
  },
});

export const { setLocal, removeLocal } = slice.actions;

export default slice.reducer;
