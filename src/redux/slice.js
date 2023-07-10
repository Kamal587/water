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
      let optID = action.payload.optionDate.option;
      let valueOpt = action.payload.optionDate.name;

      state.location = state.location.map((trip) => {
        if (trip.id === optID) {
          return { ...trip, name: valueOpt };
        }
        return trip;
      });
      debugger;
    },

    editPlace(state, action) {
      let prod = action.payload.editArr.product;
      let shop = action.payload.editArr.shop;
      let site = action.payload.editArr.site;
      let floor = action.payload.editArr.floor;
      let room = action.payload.editArr.room;
      let editID = action.payload.editArr.id;
      state.location = state.location.map((trip) => {
        if (trip.id === editID) {
          return { id: editID, product: prod, shop, site, floor, room };
        }
        return trip;
      });
    },

    editUser(state, action) {
      let name = action.payload.editArr.name;
      let prod = action.payload.editArr.product;
      let shop = action.payload.editArr.shop;
      let site = action.payload.editArr.site;
      let floor = action.payload.editArr.floor;
      let room = action.payload.editArr.room;
      let editID = action.payload.editArr.id;
      state.location = state.location.map((trip) => {
        if (trip.id === editID) {
          return { id: editID, product: prod, name, shop, site, floor, room };
        }
        return trip;
      });
      debugger;
    },

    removeLocal(state, action) {
      state.location = state.location.filter(
        (local) => local.id !== action.payload.tableProps
      );
    },
  },
});

export const {
  setLocal,
  removeLocal,
  editLocal,

  editPlace,
  editUser,
} = slice.actions;

export default slice.reducer;
