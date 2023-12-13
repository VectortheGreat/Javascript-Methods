import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: undefined,
  parameter1: undefined,
  parameter2: undefined,
  output: undefined,
  queryParam: undefined,
  hideInputs: {
    hideParameter1: true,
    hideParameter2: true,
  },
  optionalParameters: {
    optionalParameter1: false,
    optionalParameter2: false,
  },
  parameterDescriptions: {
    parameterDescriptions1: undefined,
    parameterDescriptions2: undefined,
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
    getParameter1: (state, action) => {
      state.parameter1 = action.payload;
    },
    getParameter2: (state, action) => {
      state.parameter2 = action.payload;
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
  getOutput,
  getParameter1,
  getParameter2,
  setQueryParam,
  setHideInputs,
  setOptionalParameters,
  setParameterDescriptions,
  updateCodeResult,
} = ValueSlice.actions;

export default ValueSlice.reducer;
