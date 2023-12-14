/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router-dom";
import FormComp from "../FormComp";
import MainPage from "../MainPage";
import Methods from "../Methods";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getOutput,
  setHideInputs,
  setOptionalParameters,
  setParameterDescriptions,
  setQueryParam,
} from "../../../redux/ValueSlice";

const ArrayMethods = () => {
  const methods: { [key: string]: string } = {
    At: "?method=at",
    Concat: "?method=concat",
    Every: "?method=every",
    Fill: "?method=fill",
    Filter: "?method=filter",
    Find: "?method=find",
    FindIndex: "?method=findIndex",
    FindLast: "?method=findLast",
    FindLastIndex: "?method=findLastIndex",
    Flat: "?method=flat",
    ForEach: "?method=forEach",
    Includes: "?method=includes",
    IndexOf: "?method=indexOf",
    Join: "?method=join",
    LastIndexOf: "?method=lastIndexOf",
    Map: "?method=map",
    Pop: "?method=pop",
    Push: "?method=push",
    Reduce: "?method=reduce",
    Reverse: "?method=reverse",
    Shift: "?method=shift",
    Slice: "?method=slice",
    Some: "?method=some",
    Sort: "?method=sort",
    splice: "?method=splice",
    ToString: "?method=toString",
    Unshift: "?method=unshift",
  };
  const location = useLocation();
  const dispatch = useDispatch();
  const queryParam = useSelector(
    (state: { value: { queryParam: string } }) => state.value.queryParam
  );
  const inputArray = useSelector(
    (state: { value: { inputArray: any } }) => state.value.inputArray
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
  console.log(queryParam);
  useEffect(() => {
    switch (queryParam) {
      case "at":
        dispatch(getOutput(inputArray && inputArray.at(parameter1)));
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
            inputArray && parameter2
              ? inputArray.concat(parameter1, parameter2)
              : inputArray && inputArray.concat(parameter1)
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
            parameterDescriptions1: "Arrays",
            parameterDescriptions2: "Arrays",
          })
        );
        break;
      case "every":
        dispatch(getOutput(inputArray && inputArray.every(parameter1)));
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
            inputArray && parameter2
              ? inputArray.includes(parameter1, parameter2)
              : inputArray && inputArray.includes(parameter1)
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
      case "indexOf":
        dispatch(
          getOutput(
            inputArray && parameter2
              ? inputArray.indexOf(parameter1, parameter2)
              : inputArray && inputArray.indexOf(parameter1)
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
      case "lastIndexOf":
        dispatch(
          getOutput(
            inputArray && parameter2
              ? inputArray.lastIndexOf(parameter1, parameter2)
              : inputArray && inputArray.lastIndexOf(parameter1)
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
      case "padEnd":
        dispatch(
          getOutput(inputArray && inputArray.padEnd(parameter1, parameter2))
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
      case "padStart":
        dispatch(
          getOutput(inputArray && inputArray.padStart(parameter1, parameter2))
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
        dispatch(getOutput(inputArray && inputArray.repeat(parameter1)));
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
        dispatch(
          getOutput(inputArray && inputArray.replace(parameter1, parameter2))
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
      case "replaceAll":
        dispatch(
          getOutput(inputArray && inputArray.replaceAll(parameter1, parameter2))
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
        dispatch(getOutput(inputArray && inputArray.search(parameter1)));
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
            inputArray &&
              (parameter2
                ? inputArray.slice(parameter1, parameter2)
                : inputArray.slice(parameter1))
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
            inputArray &&
              (parameter2
                ? inputArray.split(parameter1, parameter2)
                : inputArray.split(parameter1))
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
      case "startsWith":
        dispatch(
          getOutput(
            inputArray &&
              (parameter2
                ? inputArray.startsWith(parameter1, parameter2)
                : inputArray.startsWith(parameter1))
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
      case "substring":
        dispatch(
          getOutput(
            inputArray &&
              (parameter2
                ? inputArray.substring(parameter1, parameter2)
                : inputArray.substring(parameter1))
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
      case "toLowerCase":
        dispatch(getOutput(inputArray && inputArray.toLowerCase()));
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
      case "toString":
        dispatch(getOutput(inputArray && inputArray.toString()));
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
      case "toUpperCase":
        dispatch(getOutput(inputArray && inputArray.toUpperCase()));
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
        dispatch(getOutput(inputArray && inputArray.trim()));
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
      case "trimEnd":
        dispatch(getOutput(inputArray && inputArray.trimEnd()));
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
      case "trimStart":
        dispatch(getOutput(inputArray && inputArray.trimStart()));
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
  }, [queryParam, inputArray, parameter1, parameter2]);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-10">
        {queryParam ? <FormComp></FormComp> : <MainPage></MainPage>}
      </div>
      <Methods methods={methods}></Methods>
    </div>
  );
};

export default ArrayMethods;
