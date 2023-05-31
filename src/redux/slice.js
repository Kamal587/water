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

    editWater(state, action) {
      console.log(action.payload);
      let waterID = action.payload.waterDate.waterId;
      let valueWater = action.payload.waterDate.water;
      let datestring = action.payload.waterDate.datestring;
      let time = action.payload.waterDate.time;

      state.location = state.location.map((trip) => {
        if (trip.id === waterID) {
          return { ...trip, water: valueWater, time, datestring };
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

export const { setLocal, removeLocal, editLocal, editWater } = slice.actions;

export default slice.reducer;
