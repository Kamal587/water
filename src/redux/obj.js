import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  obj: [],
};

const sliceObj = createSlice({
  name: "obj",
  initialState,
  reducers: {
    editObj(state, action) {
      state.obj.push({
        id: action.payload.obj.id,
        product: action.payload.obj.product,
        shop: action.payload.obj.shop,
        site: action.payload.obj.site,
        floor: action.payload.obj.floor,
        room: action.payload.obj.room,
      });
    },
  },
});

export const { editObj } = sliceObj.actions;

export default sliceObj.reducer;
