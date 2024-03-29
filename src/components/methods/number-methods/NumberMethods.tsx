/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  getOutput,
  setHideInputs,
  setMethodDescription,
  setOptionalParameters,
  setParameterDescriptions,
  setQueryParam,
} from "../../../redux/ValueSlice";
import FormComp from "../FormComp";
import MainPage from "../MainPage";
import Methods from "../Methods";
import { useEffect } from "react";

const NumberMethods = () => {
  const methods: { [key: string]: string } = {
    IsInteger: "?method=isInteger",
    ParseFloat: "?method=parseFloat",
    ParseInt: "?method=parseInt",
    ToFixed: "?method=toFixed",
    ToPrecision: "?method=toPrecision",
    ToString: "?method=toString",
  };
  const location = useLocation();
  const dispatch = useDispatch();
  const queryParam = useSelector((state: { value: { queryParam: string } }) => state.value.queryParam);
  const input = useSelector((state: { value: { input: any } }) => state.value.input);
  const parameter1 = useSelector((state: { value: { parameter1: any } }) => state.value.parameter1);
  const inputDispatchConfiguration = (
    parameter1: any,
    parameter1Desc: any,
    parameter2: any,
    parameter2Desc: any,
    parameter3: any,
    parameter3Desc: any
  ) => {
    dispatch(
      setHideInputs({
        hideParameter1: parameter1 === "Required" ? false : parameter1 === "Optional" ? false : true,
        hideParameter2: parameter2 === "Required" ? false : parameter2 === "Optional" ? false : true,
        hideParameter3: parameter3 === "Required" ? false : parameter3 === "Optional" ? false : true,
      })
    );
    dispatch(
      setOptionalParameters({
        optionalParameter1: parameter1 === "Required" ? false : true,
        optionalParameter2: parameter2 === "Required" ? false : true,
        optionalParameter3: parameter3 === "Required" ? false : true,
      })
    );
    dispatch(
      setParameterDescriptions({
        parameterDescriptions1: parameter1Desc,
        parameterDescriptions2: parameter2Desc,
        parameterDescriptions3: parameter3Desc,
      })
    );
  };
  useEffect(() => {
    dispatch(setQueryParam(location.search.split("=")[1]));
  }, [dispatch, location.search]);
  useEffect(() => {
    let numericInput: number;
    let stringedValue: string;
    switch (queryParam) {
      case "isInteger":
        if (Number.isInteger(parseInt(input, 10))) {
          const parsedInput = parseInt(input, 10);
          dispatch(getOutput(Number.isInteger(parsedInput)));
        } else {
          dispatch(getOutput(Number.isInteger(input)));
        }
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The Number.isInteger() static method determines whether the passed value is an integer."
          )
        );
        break;
      case "parseFloat":
        dispatch(getOutput(parseFloat(input)));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The Number.parseFloat() static method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN."
          )
        );
        break;
      case "parseInt":
        dispatch(getOutput(parseInt(input)));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The Number.parseInt() static method parses a string argument and returns an integer of the specified radix or base."
          )
        );
        break;
      case "toFixed":
        numericInput = parseFloat(input);
        dispatch(
          getOutput(
            parseInt(parameter1) !== 0 && parseInt(parameter1) < 100
              ? numericInput.toFixed(parameter1)
              : numericInput.toFixed()
          )
        );
        inputDispatchConfiguration("Optional", "Digit", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription("The toFixed() method of Number values formats this number using fixed-point notation.")
        );
        break;
      case "toPrecision":
        numericInput = parseFloat(input);
        dispatch(
          getOutput(
            parseInt(parameter1) !== 0 && parseInt(parameter1) < 100
              ? numericInput.toPrecision(parameter1)
              : numericInput.toPrecision()
          )
        );
        inputDispatchConfiguration("Optional", "Digit", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The toPrecision() method of Number values returns a string representing this number to the specified precision."
          )
        );
        break;
      case "toString":
        stringedValue = input.toString();
        dispatch(getOutput(stringedValue));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The toString() method of Number values returns a string representing this number value."
          )
        );
        break;
      default:
        queryParam !== undefined ? console.error("Error. Invalid Query Param") : null;
        break;
    }
  }, [queryParam, input, parameter1]);
  return (
    <div className="grid grid-cols-12 ">
      <Methods methods={methods}></Methods>
      <div className="col-span-12 md:col-span-10 lg:col-span-10 xl:col-span-10 2xl:col-span-10 mt-5">
        {queryParam ? <FormComp></FormComp> : <MainPage></MainPage>}
      </div>
    </div>
  );
};

export default NumberMethods;
