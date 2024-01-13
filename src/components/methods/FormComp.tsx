/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import CodeEditor from "@uiw/react-textarea-code-editor";
import {
  getInput,
  getInputArray,
  getOutput,
  getParameter1,
  getParameter2,
  getParameter3,
  updateCodeResult,
} from "../../redux/ValueSlice";
import { useEffect, useState } from "react";
import { stringInputRandomizer, stringParameterRandomizer } from "../../helpers/stringRandomizer";
import { useLocation } from "react-router-dom";
import { printCode } from "../../helpers/printCode";
import { arrayInputRandomizer, arrayParameterRandomizer } from "../../helpers/arrayRandomizer";
import { numberInputRandomizer, numberParameterRandomizer } from "../../helpers/numberRandomizer";
import { dateInputRandomizer, dateParameterRandomizer } from "../../helpers/dateRandomizer";
import { mathInputRandomizer, mathParameterRandomizer } from "../../helpers/mathRandomizer";

type HideInputs = {
  hideParameter1: boolean;
  hideParameter2: boolean;
  hideParameter3: boolean;
};
type optionalParameters = {
  optionalParameter1: boolean;
  optionalParameter2: boolean;
  optionalParameter3: boolean;
};
type parameterDescriptions = {
  parameterDescriptions1: string;
  parameterDescriptions2: string;
  parameterDescriptions3: string;
};

const FormComp = () => {
  const dispatch = useDispatch();
  const testfunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const output = useSelector((state: { value: { output: any } }) => state.value.output);
  const input = useSelector((state: { value: { input: any } }) => state.value.input);
  const inputArray = useSelector((state: { value: { inputArray: any } }) => state.value.inputArray);
  const parameter1 = useSelector((state: { value: { parameter1: any } }) => state.value.parameter1);
  const parameter2 = useSelector((state: { value: { parameter2: any } }) => state.value.parameter2);
  const parameter3 = useSelector((state: { value: { parameter3: any } }) => state.value.parameter3);

  const queryParam = useSelector((state: { value: { queryParam: string } }) => state.value.queryParam);
  const hideInputs: HideInputs = useSelector((state: { value: { hideInputs: HideInputs } }) => state.value.hideInputs);
  const optionalParameters: optionalParameters = useSelector(
    (state: { value: { optionalParameters: optionalParameters } }) => state.value.optionalParameters
  );
  const parameterDescriptions: parameterDescriptions = useSelector(
    (state: { value: { parameterDescriptions: parameterDescriptions } }) => state.value.parameterDescriptions
  );
  const placeholderValue1 = optionalParameters.optionalParameter1
    ? `Parameter 1 (Optional) - ${parameterDescriptions.parameterDescriptions1}`
    : `Parameter 1 (Required) - ${parameterDescriptions.parameterDescriptions1}`;
  const placeholderValue2 = optionalParameters.optionalParameter2
    ? `Parameter 2 (Optional) - ${parameterDescriptions.parameterDescriptions2}`
    : `Parameter 2 (Required) - ${parameterDescriptions.parameterDescriptions2}`;
  const placeholderValue3 = optionalParameters.optionalParameter3
    ? `Parameter 3 (Optional) - ${parameterDescriptions.parameterDescriptions3}`
    : `Parameter 3 (Required) - ${parameterDescriptions.parameterDescriptions3}`;
  const [placeholderText, setPlaceholderText] = useState("Input");
  useEffect(() => {
    dispatch(getInput(""));
    dispatch(getParameter1(""));
    dispatch(getParameter2(""));
    dispatch(getParameter3(""));
    if (pathname === "math") {
      if (queryParam === "random") {
        setPlaceholderText("Parameter 1 (Optional) - Max Value");
      } else {
        setPlaceholderText("Parameter 1 (Required) - Value");
      }
    } else {
      setPlaceholderText("Input");
    }
  }, [queryParam]);

  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  useEffect(() => {
    const printedCode = printCode(
      pathname,
      queryParam,
      pathname === "array" ? inputArray : input,
      parameter1,
      parameter2,
      parameter3
    );
    dispatch(updateCodeResult(printedCode ?? ""));
  }, [pathname, queryParam, input, parameter1, parameter2, parameter3, inputArray]);

  const randomizerFunc = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    const randomNumber2 = Math.floor(Math.random() * 5);
    const randomNumber3 = Math.floor(Math.random() * 5);
    const value =
      pathname === "string"
        ? stringInputRandomizer[queryParam as keyof typeof stringInputRandomizer][randomNumber]
        : pathname === "array"
        ? arrayInputRandomizer[queryParam as keyof typeof arrayInputRandomizer][randomNumber]
        : pathname === "number"
        ? numberInputRandomizer[queryParam as keyof typeof numberInputRandomizer][randomNumber]
        : pathname === "date"
        ? dateInputRandomizer[queryParam as keyof typeof dateInputRandomizer][randomNumber]
        : pathname === "math"
        ? mathInputRandomizer[queryParam as keyof typeof mathInputRandomizer][randomNumber]
        : null;
    const parameterValue =
      pathname === "string"
        ? stringParameterRandomizer[queryParam as keyof typeof stringParameterRandomizer][randomNumber2]
        : pathname === "array"
        ? arrayParameterRandomizer[queryParam as keyof typeof arrayParameterRandomizer][randomNumber2]
        : pathname === "number"
        ? numberParameterRandomizer[queryParam as keyof typeof numberParameterRandomizer][randomNumber2]
        : pathname === "date"
        ? dateParameterRandomizer[queryParam as keyof typeof dateParameterRandomizer][randomNumber2]
        : pathname === "math"
        ? mathParameterRandomizer[queryParam as keyof typeof mathParameterRandomizer][randomNumber2]
        : null;
    const parameterValue2 =
      pathname === "string"
        ? stringParameterRandomizer[queryParam as keyof typeof stringParameterRandomizer][randomNumber3]
        : pathname === "array"
        ? arrayParameterRandomizer[queryParam as keyof typeof arrayParameterRandomizer][randomNumber3]
        : null;
    if (pathname === "string") {
      switch (queryParam) {
        case "charat":
          dispatch(getInput(value));
          dispatch(getParameter1(randomNumber));
          break;
        case "concat":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "endsWith":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "includes":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "indexOf":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "lastIndexOf":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "padEnd":
          dispatch(getInput(value));
          dispatch(getParameter1(Math.floor(Math.random() * (60 - 30 + 1) + 30)));
          dispatch(getParameter2(parameterValue));
          break;
        case "padStart":
          dispatch(getInput(value));
          dispatch(getParameter1(Math.floor(Math.random() * (60 - 30 + 1) + 30)));
          dispatch(getParameter2(parameterValue));
          break;
        case "repeat":
          dispatch(getInput(value));
          dispatch(getParameter1(Math.floor(Math.random() * (60 - 5 + 1) + 5)));
          break;
        case "replace":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          dispatch(getParameter2(parameterValue2));
          break;
        case "replaceAll":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          dispatch(getParameter2(parameterValue2));
          break;
        case "search":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "slice":
          dispatch(getInput(value));
          dispatch(getParameter1(randomNumber));
          break;
        case "split":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "startsWith":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "substring":
          dispatch(getInput(value));
          dispatch(getParameter1(randomNumber));
          break;
        case "toLowerCase":
          dispatch(getInput(value));
          break;
        case "toString":
          dispatch(getInput(value));
          break;
        case "toUpperCase":
          dispatch(getInput(value));
          break;
        case "trim":
          dispatch(getInput(value));
          break;
        case "trimEnd":
          dispatch(getInput(value));
          break;
        case "trimStart":
          dispatch(getInput(value));
          break;

        default:
          console.error("Invalid queryParam");
          break;
      }
    } else if (pathname === "array") {
      // prettier-ignore
      const validQueryParams = [ "at", "concat", "every", "fill", "filter", "find", "findIndex", "findLast", "findLastIndex", "forEach", "includes", "indexOf", "join", "lastIndexOf", "map", "pop", "push", "reduce", "reverse", "shift", "slice", "some", "sort", "splice", "unshift", ];
      if (validQueryParams.includes(queryParam)) {
        dispatch(getOutput(""));
        dispatch(getInputArray(value));
        dispatch(getParameter1(parameterValue));
      } else {
        console.error("Invalid queryParam");
      }
    } else if (pathname === "number") {
      const validQueryParams = ["isInteger", "parseFloat", "parseInt", "toFixed", "toPrecision", "toString"];
      if (validQueryParams.includes(queryParam)) {
        dispatch(getOutput(""));
        dispatch(getInput(value));
        dispatch(getParameter1(parameterValue));
      } else {
        console.error("Invalid queryParam");
      }
    } else if (pathname === "date") {
      // prettier-ignore
      const validQueryParams = [ "getDate", "getDay", "getFullYear", "getHours", "getMinutes", "getMonth", "getSeconds", "setDate", "setFullYear", "setHours", "setMinutes", "setMonth", "setSeconds", "toDateString", "toISOString", "toString", "toTimeString", ];
      if (validQueryParams.includes(queryParam)) {
        dispatch(getInput(value));
        dispatch(getParameter1(parameterValue));
      } else {
        console.error("Invalid queryParam");
      }
    } else if (pathname === "math") {
      const validQueryParams = ["abs", "cbrt", "ceil", "floor", "max", "min", "pow", "random", "round"];
      if (validQueryParams.includes(queryParam)) {
        dispatch(getInput(value));
        dispatch(getParameter2(parameterValue));
      } else {
        console.error("Invalid queryParam");
      }
    }
  };

  const setInputFunc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (pathname === "array") {
      dispatch(getInputArray(e.target.value));
    } else {
      dispatch(getInput(e.target.value));
    }
  };

  return (
    <form onSubmit={testfunc} className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-md">
      <div className="mb-4 px-1">
        <h1 className="font-bold">{queryParam}()</h1>
      </div>
      <div className="mb-4 space-y-4">
        <div className="relative">
          {pathname === "array" ? (
            <textarea
              rows={2}
              id="inputArray"
              name="inputArray"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 resize-none"
              placeholder="input Array"
              value={inputArray}
              onChange={(e) => setInputFunc(e)}
            />
          ) : (
            <textarea
              rows={2}
              id="input"
              name="input"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 resize-none"
              placeholder={placeholderText}
              value={input}
              onChange={(e) => setInputFunc(e)}
            />
          )}
        </div>
        {hideInputs.hideParameter1 ? null : (
          <input
            type="text"
            id="input2"
            name="input2"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 resize-none"
            placeholder={placeholderValue1}
            value={parameter1}
            onChange={(e) => dispatch(getParameter1(e.target.value))}
          />
        )}
        {hideInputs.hideParameter2 ? null : (
          <input
            type="text"
            id="input"
            name="input"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 resize-none"
            placeholder={placeholderValue2}
            value={parameter2}
            onChange={(e) => dispatch(getParameter2(e.target.value))}
          />
        )}
        {hideInputs.hideParameter3 ? null : (
          <input
            type="text"
            id="input"
            name="input"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 resize-none"
            placeholder={placeholderValue3}
            value={parameter3}
            onChange={(e) => dispatch(getParameter3(e.target.value))}
          />
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Code</label>
        <CodeEditor
          value={useSelector((state: { value: { codeResult: string } }) => state.value.codeResult)}
          language="js"
          padding={15}
          // className="bg-gray-200 text-black font-mono"
          className="bg-slate-900 text-white font-mono w-full px-3 py-2 border rounded-md resize-none tracking-wider"
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Output</label>
        <textarea
          disabled
          id="output"
          name="output"
          value={output}
          rows={4}
          className="w-full px-3 py-2 border rounded-md bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <button
          className="bg-yellow-300 hover:bg-orange-400  text-black p-2 rounded-md mx-auto block"
          onClick={randomizerFunc}
        >
          Randomize
        </button>
      </div>
    </form>
  );
};

export default FormComp;
