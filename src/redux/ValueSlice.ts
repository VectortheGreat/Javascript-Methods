/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: undefined,
  inputArray: undefined,
  parameter1: undefined,
  parameter2: undefined,
  parameter3: undefined,
  output: undefined,
  queryParam: undefined,
  hideInputs: {
    hideParameter1: true,
    hideParameter2: true,
    hideParameter3: true,
  },
  optionalParameters: {
    optionalParameter1: false,
    optionalParameter2: false,
    optionalParameter3: false,
  },
  parameterDescriptions: {
    parameterDescriptions1: undefined,
    parameterDescriptions2: undefined,
    parameterDescriptions3: undefined,
  },
  codeResult: undefined,
};

const ValueSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    getInput: (state, action) => {
      state.input = action.payload;
    },
    getInputArray: (state, action) => {
      state.inputArray = action.payload.split(",").map((item: any) => item.trim());
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
    getOutput: (state, action) => {
      state.output = action.payload;
      console.log(state.output);
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
    setParameterDescriptions: (state, action) => {
      state.parameterDescriptions = {
        ...state.parameterDescriptions,
        ...action.payload,
      };
    },
    updateCodeResult: (state, action: PayloadAction<string>) => {
      state.codeResult = action.payload;
    },
  },
});

export const {
  getInput,
  getInputArray,
  getOutput,
  getParameter1,
  getParameter2,
  getParameter3,
  setQueryParam,
  setHideInputs,
  setOptionalParameters,
  setParameterDescriptions,
  updateCodeResult,
} = ValueSlice.actions;

export default ValueSlice.reducer;
