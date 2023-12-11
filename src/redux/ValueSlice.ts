import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  parameter1: "",
  parameter2: "",
  parameter3: "",
  parameter4: "",
  output: "",
  queryParam: "",
  hideInputs: {
    hideParameter1: false,
    hideParameter2: false,
    hideParameter3: false,
    hideParameter4: false,
  },
  optionalParameters: {
    optionalParameter1: false,
    optionalParameter2: false,
    optionalParameter3: false,
    optionalParameter4: false,
  },
};

const ValueSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    getInput: (state, action) => {
      state.input = action.payload;
    },
    getParameter1: (state, action) => {
      state.parameter1 = action.payload;
    },
    getParameter2: (state, action) => {
      state.parameter2 = action.payload;
    },
    getParameter3: (state, action) => {
      state.parameter3 = action.payload;
    },
    getParameter4: (state, action) => {
      state.parameter4 = action.payload;
    },
    getOutput: (state, action) => {
      state.output = action.payload;
    },
    setQueryParam: (state, action) => {
      state.queryParam = action.payload;
    },
    setHideInputs: (state, action) => {
      state.hideInputs = { ...state.hideInputs, ...action.payload };
    },
    setOptionalParameters: (state, action) => {
      state.optionalParameters = {
        ...state.optionalParameters,
        ...action.payload,
      };
    },
  },
});

export const {
  getInput,
  getOutput,
  getParameter1,
  getParameter2,
  getParameter3,
  getParameter4,
  setQueryParam,
  setHideInputs,
  setOptionalParameters,
} = ValueSlice.actions;

export default ValueSlice.reducer;
