/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import FormComp from "../FormComp";
import Methods from "../Methods";
import { useDispatch, useSelector } from "react-redux";
import {
  getOutput,
  setHideInputs,
  setOptionalParameters,
  setParameterDescriptions,
  setQueryParam,
} from "../../../redux/ValueSlice";
import MainPage from "../MainPage";

const StringMethods = () => {
  const methods: { [key: string]: string } = {
    CharAt: "?method=charat",
    Concat: "?method=concat",
    EndsWith: "?method=endswith",
    Includes: "?method=includes",
    IndexOf: "?method=indexof",
    LastIndexOf: "?method=lastindexof",
    PadEnd: "?method=padend",
    PadStart: "?method=padstart",
    Repeat: "?method=repeat",
    Replace: "?method=replace",
    ReplaceAll: "?method=replaceall",
    Search: "?method=search",
    Slice: "?method=slice",
    Split: "?method=split",
    StartsWith: "?method=startswith",
    Subtring: "?method=substring",
    ToLowerCase: "?method=tolowercase",
    ToString: "?method=tostring",
    ToUpperCase: "?method=touppercase",
    Trim: "?method=trim",
    TrimEnd: "?method=trimend",
    TrimStart: "?method=trimstart",
  };

  const location = useLocation();
  const dispatch = useDispatch();
  const queryParam = useSelector(
    (state: { value: { queryParam: string } }) => state.value.queryParam
  );
  const input = useSelector(
    (state: { value: { input: string } }) => state.value.input
  );
  const parameter1 = useSelector(
    (state: { value: { parameter1: any } }) => state.value.parameter1
  );
  const parameter2 = useSelector(
    (state: { value: { parameter2: any } }) => state.value.parameter2
  );
  useEffect(() => {
    dispatch(setQueryParam(location.search.split("=")[1]));
  }, [dispatch, location.search]);
  useEffect(() => {
    switch (queryParam) {
      case "charat":
        dispatch(getOutput(input.charAt(parameter1)));
        dispatch(
          setHideInputs({
            hideParameter1: false,
            hideParameter2: true,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: false,
            optionalParameter2: false,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "Index Number",
            parameterDescriptions2: "",
          })
        );
        break;
      case "concat":
        dispatch(
          getOutput(
            parameter2
              ? input.concat(parameter1, parameter2)
              : input.concat(parameter1)
          )
        );
        dispatch(
          setHideInputs({
            hideParameter1: false,
            hideParameter2: false,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: false,
            optionalParameter2: true,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "String Value",
            parameterDescriptions2: "String Value",
          })
        );
        break;
      case "endswith":
        dispatch(
          getOutput(
            parameter2
              ? input.endsWith(parameter1, parameter2)
              : input.endsWith(parameter1)
          )
        );
        dispatch(
          setHideInputs({
            hideParameter1: false,
            hideParameter2: false,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: false,
            optionalParameter2: true,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "Search String",
            parameterDescriptions2: "End Position Number",
          })
        );
        break;
      case "includes":
        dispatch(
          getOutput(
            parameter2
              ? input.includes(parameter1, parameter2)
              : input.includes(parameter1)
          )
        );
        dispatch(
          setHideInputs({
            hideParameter1: false,
            hideParameter2: false,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: false,
            optionalParameter2: true,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "Search String",
            parameterDescriptions2: "Position Number",
          })
        );
        break;
      case "indexof":
        dispatch(getOutput(input.indexOf(parameter1, parameter2)));
        dispatch(
          setHideInputs({
            hideParameter1: false,
            hideParameter2: false,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: false,
            optionalParameter2: true,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "Search String",
            parameterDescriptions2: "Position Number",
          })
        );
        break;
      case "lastindexof":
        dispatch(getOutput(input.lastIndexOf(parameter1)));
        dispatch(
          setHideInputs({
            hideParameter1: false,
            hideParameter2: false,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: false,
            optionalParameter2: false,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "Search String",
            parameterDescriptions2: "Position Number",
          })
        );
        break;
      case "padend":
        dispatch(getOutput(input.padEnd(parameter1, parameter2)));
        dispatch(
          setHideInputs({
            hideParameter1: false,
            hideParameter2: false,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: false,
            optionalParameter2: false,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "Max Length Number",
            parameterDescriptions2: "Fill String",
          })
        );
        break;
      case "padstart":
        dispatch(getOutput(input.padStart(parameter1, parameter2)));
        dispatch(
          setHideInputs({
            hideParameter1: false,
            hideParameter2: false,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: false,
            optionalParameter2: false,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "Max Length Number",
            parameterDescriptions2: "Fill String",
          })
        );
        break;
      case "repeat":
        dispatch(getOutput(input.repeat(parameter1)));
        dispatch(
          setHideInputs({
            hideParameter1: false,
            hideParameter2: true,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: false,
            optionalParameter2: true,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "Count Number",
            parameterDescriptions2: "",
          })
        );
        break;
      case "replace":
        dispatch(getOutput(input.replace(parameter1, parameter2)));
        dispatch(
          setHideInputs({
            hideParameter1: false,
            hideParameter2: false,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: false,
            optionalParameter2: false,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "String to Change",
            parameterDescriptions2: "String to Replace",
          })
        );
        break;
      case "replaceall":
        dispatch(getOutput(input.replaceAll(parameter1, parameter2)));
        dispatch(
          setHideInputs({
            hideParameter1: false,
            hideParameter2: false,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: false,
            optionalParameter2: false,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "Strings to Change",
            parameterDescriptions2: "Strings to Replace",
          })
        );
        break;
      case "search":
        dispatch(getOutput(input.search(parameter1)));
        dispatch(
          setHideInputs({
            hideParameter1: false,
            hideParameter2: true,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: false,
            optionalParameter2: true,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "Search Value",
            parameterDescriptions2: "",
          })
        );
        break;
      case "slice":
        dispatch(
          getOutput(
            parameter2
              ? input.slice(parameter1, parameter2)
              : input.slice(parameter1)
          )
        );
        dispatch(
          setHideInputs({
            hideParameter1: false,
            hideParameter2: false,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: false,
            optionalParameter2: true,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "Start Number",
            parameterDescriptions2: "End Number",
          })
        );
        break;
      case "split":
        dispatch(
          getOutput(
            parameter2
              ? input.split(parameter1, parameter2)
              : input.split(parameter1)
          )
        );
        dispatch(
          setHideInputs({
            hideParameter1: false,
            hideParameter2: false,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: false,
            optionalParameter2: true,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "Separator Value",
            parameterDescriptions2: "Limit Number",
          })
        );
        break;
      case "startswith":
        dispatch(getOutput(input.startsWith(parameter1, parameter2)));
        dispatch(
          setHideInputs({
            hideParameter1: false,
            hideParameter2: false,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: false,
            optionalParameter2: true,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "Search String",
            parameterDescriptions2: "Position Number",
          })
        );
        break;
      case "substring":
        dispatch(
          getOutput(
            parameter2
              ? input.substring(parameter1, parameter2)
              : input.substring(parameter1)
          )
        );
        dispatch(
          setHideInputs({
            hideParameter1: false,
            hideParameter2: false,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: false,
            optionalParameter2: true,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "Start Number",
            parameterDescriptions2: "End Number",
          })
        );
        break;
      case "tolowercase":
        dispatch(getOutput(input.toLowerCase()));
        dispatch(
          setHideInputs({
            hideParameter1: true,
            hideParameter2: true,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: true,
            optionalParameter2: true,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "",
            parameterDescriptions2: "",
          })
        );
        break;
      case "tostring":
        dispatch(getOutput(input.toString()));
        dispatch(
          setHideInputs({
            hideParameter1: true,
            hideParameter2: true,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: true,
            optionalParameter2: true,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "",
            parameterDescriptions2: "",
          })
        );
        break;
      case "touppercase":
        dispatch(getOutput(input.toUpperCase()));
        dispatch(
          setHideInputs({
            hideParameter1: true,
            hideParameter2: true,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: true,
            optionalParameter2: true,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "",
            parameterDescriptions2: "",
          })
        );
        break;
      case "trim":
        dispatch(getOutput(input.trim()));
        dispatch(
          setHideInputs({
            hideParameter1: true,
            hideParameter2: true,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: true,
            optionalParameter2: true,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "",
            parameterDescriptions2: "",
          })
        );
        break;
      case "trimend":
        dispatch(getOutput(input.trimEnd()));
        dispatch(
          setHideInputs({
            hideParameter1: true,
            hideParameter2: true,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: true,
            optionalParameter2: true,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "",
            parameterDescriptions2: "",
          })
        );
        break;
      case "trimstart":
        dispatch(getOutput(input.trimStart()));
        dispatch(
          setHideInputs({
            hideParameter1: true,
            hideParameter2: true,
          })
        );
        dispatch(
          setOptionalParameters({
            optionalParameter1: true,
            optionalParameter2: true,
          })
        );
        dispatch(
          setParameterDescriptions({
            parameterDescriptions1: "",
            parameterDescriptions2: "",
          })
        );
        break;
      default:
        console.error("Error. Invalid Query Param");
        break;
    }
  }, [queryParam, input, parameter1, parameter2]);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-10">
        {queryParam ? <FormComp></FormComp> : <MainPage></MainPage>}
      </div>
      <Methods methods={methods}></Methods>
    </div>
  );
};

export default StringMethods;
