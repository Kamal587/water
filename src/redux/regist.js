import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  regist: "",
};

const sliceReg = createSlice({
  name: "regist",
  initialState,
  reducers: {
    editReg(state, action) {
      state.regist = action.payload.result;
    },
  },
});

export const { editReg } = sliceReg.actions;

export default sliceReg.reducer;
