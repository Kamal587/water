import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: [],
};

const slice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocal(state, action) {
      state.location.push({
        params: action.payload.location,
      });
      console.log(state.location);
    },
    // removeLocal(state, action) {
    //   localStorage.setItem("token", action.payload.token);
    //   state.token = action.payload.token;
    // },
  },
});

export const { setLocal, removeLocal } = slice.actions;

export default slice.reducer;
