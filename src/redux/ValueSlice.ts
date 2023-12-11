import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  input2: "",
  output: "",
  parameterValues: [],
  queryParam: "",
  hideInputs: { hideInput2: false, hideParameter: false },
};

const ValueSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    getInput: (state, action) => {
      state.input = action.payload;
    },
    getInput2: (state, action) => {
      state.input2 = action.payload;
    },
    getOutput: (state, action) => {
      state.output = action.payload;
    },
    getParameterValues: (state, action) => {
      const inputValue = action.payload;
      const valuesArray = inputValue
        .split(",")
        .map((value: string) => value.trim());
      state.parameterValues = valuesArray;
      console.log(state.parameterValues);
    },
    setQueryParam: (state, action) => {
      state.queryParam = action.payload;
    },
    setHideInputs: (state, action) => {
      state.hideInputs = { ...state.hideInputs, ...action.payload };
    },
  },
});

export const {
  getInput,
  getOutput,
  getParameterValues,
  getInput2,
  setQueryParam,
  setHideInputs,
} = ValueSlice.actions;

export default ValueSlice.reducer;
