/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import {
  getInput,
  getParameter1,
  getParameter2,
  updateCodeResult,
} from "../../redux/ValueSlice";
import { useEffect } from "react";
import { FaDice } from "react-icons/fa6";
import {
  stringInputRandomizer,
  stringParameterRandomizer,
} from "../../helpers/stringRandomizer";
import { useLocation } from "react-router-dom";
import { printCode } from "../../helpers/printCode";

type HideInputs = {
  hideParameter1: boolean;
  hideParameter2: boolean;
};
type optionalParameters = {
  optionalParameter1: boolean;
  optionalParameter2: boolean;
};
type parameterDescriptions = {
  parameterDescriptions1: string;
  parameterDescriptions2: string;
};

const FormComp = () => {
  const dispatch = useDispatch();
  const testfunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const output = useSelector(
    (state: { value: { output: string } }) => state.value.output
  );
  const input = useSelector(
    (state: { value: { input: string } }) => state.value.input
  );
  const parameter1 = useSelector(
    (state: { value: { parameter1: string } }) => state.value.parameter1
  );
  const parameter2 = useSelector(
    (state: { value: { parameter2: string } }) => state.value.parameter2
  );

  const queryParam = useSelector(
    (state: { value: { queryParam: string } }) => state.value.queryParam
  );
  const hideInputs: HideInputs = useSelector(
    (state: { value: { hideInputs: HideInputs } }) => state.value.hideInputs
  );
  const optionalParameters: optionalParameters = useSelector(
    (state: { value: { optionalParameters: optionalParameters } }) =>
      state.value.optionalParameters
  );
  const parameterDescriptions: parameterDescriptions = useSelector(
    (state: { value: { parameterDescriptions: parameterDescriptions } }) =>
      state.value.parameterDescriptions
  );
  const placeholderValue1 = optionalParameters.optionalParameter1
    ? `Parameter 1 (Optional) - ${parameterDescriptions.parameterDescriptions1}`
    : `Parameter 1 (Required) - ${parameterDescriptions.parameterDescriptions1}`;
  const placeholderValue2 = optionalParameters.optionalParameter2
    ? `Parameter 2 (Optional) - ${parameterDescriptions.parameterDescriptions2}`
    : `Parameter 2 (Required) - ${parameterDescriptions.parameterDescriptions2}`;
  useEffect(() => {
    dispatch(getInput(""));
    dispatch(getParameter1(""));
    dispatch(getParameter2(""));
  }, [queryParam]);

  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  useEffect(() => {
    const printedCode = printCode(
      pathname,
      queryParam,
      input,
      parameter1,
      parameter2
    );
    dispatch(updateCodeResult(printedCode ?? ""));
  }, [pathname, queryParam, input, parameter1, parameter2]);

  const randomizerFunc = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    const randomNumber2 = Math.floor(Math.random() * 5);
    const randomNumber3 = Math.floor(Math.random() * 5);
    const value =
      stringInputRandomizer[queryParam as keyof typeof stringInputRandomizer][
        randomNumber
      ];
    const parameterValue =
      stringParameterRandomizer[
        queryParam as keyof typeof stringParameterRandomizer
      ][randomNumber2];
    const parameterValue2 =
      stringParameterRandomizer[
        queryParam as keyof typeof stringParameterRandomizer
      ][randomNumber3];

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
        case "endswith":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "includes":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "indexof":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "lastindexof":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "padend":
          dispatch(getInput(value));
          dispatch(
            getParameter1(Math.floor(Math.random() * (60 - 30 + 1) + 30))
          );
          dispatch(getParameter2(parameterValue));
          break;
        case "padstart":
          dispatch(getInput(value));
          dispatch(
            getParameter1(Math.floor(Math.random() * (60 - 30 + 1) + 30))
          );
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
        case "replaceall":
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
        case "startswith":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "substring":
          dispatch(getInput(value));
          dispatch(getParameter1(randomNumber));
          break;
        case "tolowercase":
          dispatch(getInput(value));
          break;
        case "tostring":
          dispatch(getInput(value));
          break;
        case "touppercase":
          dispatch(getInput(value));
          break;
        case "trim":
          dispatch(getInput(value));
          break;
        case "trimend":
          dispatch(getInput(value));
          break;
        case "trimstart":
          dispatch(getInput(value));
          break;

        default:
          console.error("Invalid queryParam");
          break;
      }
    }
  };

  return (
    <form
      onSubmit={testfunc}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
    >
      <div className="mb-4 space-y-4">
        <div className="relative">
          <textarea
            rows={2}
            id="input"
            name="input"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 resize-none"
            placeholder="Input"
            value={input}
            onChange={(e) => dispatch(getInput(e.target.value))}
          />
          <FaDice
            className="absolute right-0 top-0 mt-2 mr-2 cursor-pointer"
            size={18}
            onClick={randomizerFunc}
          />
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
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Code
        </label>
        <textarea
          disabled
          id="codeResult"
          name="codeResult"
          value={useSelector(
            (state: { value: { codeResult: string } }) => state.value.codeResult
          )}
          rows={4}
          className="w-full px-3 py-2 border rounded-md resize-none"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Output
        </label>
        <textarea
          disabled
          id="output"
          name="output"
          value={output}
          rows={4}
          className="w-full px-3 py-2 border rounded-md bg-gray-100 resize-none"
        />
      </div>
    </form>
  );
};

export default FormComp;
