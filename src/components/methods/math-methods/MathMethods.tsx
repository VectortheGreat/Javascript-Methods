/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import {
  getOutput,
  setHideInputs,
  setMethodDescription,
  setOptionalParameters,
  setParameterDescriptions,
  setQueryParam,
} from "../../../redux/ValueSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import FormComp from "../FormComp";
import MainPage from "../MainPage";
import Methods from "../Methods";

const MathMethods = () => {
  const methods: { [key: string]: string } = {
    Abs: "?method=abs",
    Cbrt: "?method=cbrt",
    Ceil: "?method=ceil",
    Floor: "?method=floor",
    Max: "?method=max",
    Min: "?method=min",
    Pow: "?method=pow",
    Random: "?method=random",
    Round: "?method=round",
  };
  const location = useLocation();
  const dispatch = useDispatch();
  const queryParam = useSelector((state: { value: { queryParam: string } }) => state.value.queryParam);
  const input = useSelector((state: { value: { input: any } }) => state.value.input);
  const parameter1 = useSelector((state: { value: { parameter1: any } }) => state.value.parameter1);
  const parameter2 = useSelector((state: { value: { parameter2: any } }) => state.value.parameter2);
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
    switch (queryParam) {
      case "abs":
        dispatch(getOutput(Math.abs(input)));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(setMethodDescription("The Math.abs() static method returns the absolute value of a number."));
        break;
      case "cbrt":
        dispatch(getOutput(Math.cbrt(input)));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(setMethodDescription("The Math.cbrt() static method returns the cube root of a number."));
        break;
      case "ceil":
        dispatch(getOutput(Math.ceil(input)));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number."
          )
        );
        break;
      case "floor":
        dispatch(getOutput(Math.floor(input)));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number."
          )
        );
        break;
      case "max":
        dispatch(getOutput(Math.max(input, parameter2)));
        inputDispatchConfiguration(undefined, undefined, "Required", "Value", undefined, undefined);
        dispatch(
          setMethodDescription(
            "The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters."
          )
        );
        break;
      case "min":
        dispatch(getOutput(Math.min(input, parameter2)));
        inputDispatchConfiguration(undefined, undefined, "Required", "Value", undefined, undefined);
        dispatch(
          setMethodDescription(
            "The Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters."
          )
        );
        break;
      case "pow":
        dispatch(getOutput(Math.pow(input, parameter2)));
        inputDispatchConfiguration(undefined, undefined, "Required", "Value", undefined, undefined);
        dispatch(setMethodDescription("The Math.pow() static method returns the value of a base raised to a power."));
        break;
      case "random":
        dispatch(getOutput(input ? Math.random() * input : Math.random()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user."
          )
        );
        break;
      case "round":
        dispatch(getOutput(Math.round(input)));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The Math.round() static method returns the value of a number rounded to the nearest integer."
          )
        );
        break;
      default:
        queryParam !== undefined ? console.error("Error. Invalid Query Param") : null;
        break;
    }
  }, [queryParam, input, parameter1, parameter2]);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-10">{queryParam ? <FormComp></FormComp> : <MainPage></MainPage>}</div>
      <Methods methods={methods}></Methods>
    </div>
  );
};

export default MathMethods;
