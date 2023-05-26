import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  location: [],
};
const { v4: uuidv4 } = require("uuid");
const slice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocal(state, action) {
      state.location.push({
        id: uuidv4(),
        product: action.payload.formData.product,
        shop: action.payload.formData.shop,
        site: action.payload.formData.site,
        floor: action.payload.formData.floor,
        room: action.payload.formData.room,
      });
    },
    editLocal(state, action) {
      console.log(action.payload);
      let optID = action.payload.optionDate.option;
      let valueOpt = action.payload.optionDate.name;

      state.location = state.location.map((trip) => {
        if (trip.id === optID) {
          return { ...trip, name: valueOpt };
        }
        return trip;
      });
    },

    removeLocal(state, action) {
      state.location = state.location.filter(
        (local) => local.id !== action.payload.tableProps
      );
    },
  },
});

export const { setLocal, removeLocal, editLocal } = slice.actions;

export default slice.reducer;
