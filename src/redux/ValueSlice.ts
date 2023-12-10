import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  output: "",
};

const ValueSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    getInput: (state, action) => {
      state.input = action.payload;
    },
    getOutput: (state, action) => {
      state.output = action.payload;
    },
  },
});

export const { getInput, getOutput } = ValueSlice.actions;

export default ValueSlice.reducer;
