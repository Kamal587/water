import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  apply: [],
};

const sliceApply = createSlice({
  name: "apply",
  initialState,
  reducers: {
    editWater(state, action) {
      state.apply.push({
        id: action.payload.waterDate.waterId,
        product: action.payload.waterDate.product,
        shop: action.payload.waterDate.shop,
        site: action.payload.waterDate.site,
        floor: action.payload.waterDate.floor,
        room: action.payload.waterDate.room,
        time: action.payload.waterDate.time,
        datestring: action.payload.waterDate.datestring,
        water: action.payload.waterDate.water,
      });
    },

    editTime(state, action) {
      let waterID = action.payload.timeDate.waterId;

      let time = action.payload.timeDate.time;

      state.apply = state.apply.map((trip) => {
        if (trip.id === waterID) {
          return { ...trip, time };
        }
        return trip;
      });
    },
  },
});

export const {
  editWater,

  editTime,
} = sliceApply.actions;

export default sliceApply.reducer;
