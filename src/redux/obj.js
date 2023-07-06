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
      state.obj = [];
      state.obj.push({
        id: action.payload.objWind.id,
        product: action.payload.objWind.product,
        shop: action.payload.objWind.shop,
        site: action.payload.objWind.site,
        floor: action.payload.objWind.floor,
        room: action.payload.objWind.room,
      });
    },
  },
});

export const { editObj } = sliceObj.actions;

export default sliceObj.reducer;
