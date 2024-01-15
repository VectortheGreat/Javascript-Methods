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
  setMethodDescription,
  setOptionalParameters,
  setParameterDescriptions,
  setQueryParam,
} from "../../../redux/ValueSlice";
import MainPage from "../MainPage";

const StringMethods = () => {
  const methods: { [key: string]: string } = {
    CharAt: "?method=charat",
    Concat: "?method=concat",
    EndsWith: "?method=endsWith",
    Includes: "?method=includes",
    IndexOf: "?method=indexOf",
    LastIndexOf: "?method=lastIndexOf",
    PadEnd: "?method=padEnd",
    PadStart: "?method=padStart",
    Repeat: "?method=repeat",
    Replace: "?method=replace",
    ReplaceAll: "?method=replaceAll",
    Search: "?method=search",
    Slice: "?method=slice",
    Split: "?method=split",
    StartsWith: "?method=startsWith",
    Substring: "?method=substring",
    ToLowerCase: "?method=toLowerCase",
    ToString: "?method=toString",
    ToUpperCase: "?method=toUpperCase",
    Trim: "?method=trim",
    TrimEnd: "?method=trimEnd",
    TrimStart: "?method=trimStart",
  };

  const location = useLocation();
  const dispatch = useDispatch();
  const queryParam = useSelector((state: { value: { queryParam: string } }) => state.value.queryParam);
  const input = useSelector((state: { value: { input: string } }) => state.value.input);
  const parameter1 = useSelector((state: { value: { parameter1: any } }) => state.value.parameter1);
  const parameter2 = useSelector((state: { value: { parameter2: any } }) => state.value.parameter2);
  useEffect(() => {
    dispatch(setQueryParam(location.search.split("=")[1]));
  }, [dispatch, location.search]);
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
    switch (queryParam) {
      case "charat":
        dispatch(getOutput(input && input.charAt(parameter1)));
        inputDispatchConfiguration("Required", "Index Number", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index."
          )
        );
        break;
      case "concat":
        dispatch(
          getOutput(input && parameter2 ? input.concat(parameter1, parameter2) : input && input.concat(parameter1))
        );
        inputDispatchConfiguration("Required", "String Value", "Optional", "String Value", undefined, undefined);
        dispatch(
          setMethodDescription(
            "The concat() method of String values concatenates the string arguments to this string and returns a new string."
          )
        );
        break;
      case "endsWith":
        dispatch(
          getOutput(input && parameter2 ? input.endsWith(parameter1, parameter2) : input && input.endsWith(parameter1))
        );
        inputDispatchConfiguration(
          "Required",
          "Search String",
          "Optional",
          "End Position Number",
          undefined,
          undefined
        );
        dispatch(
          setMethodDescription(
            "The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate."
          )
        );
        break;
      case "includes":
        dispatch(
          getOutput(input && parameter2 ? input.includes(parameter1, parameter2) : input && input.includes(parameter1))
        );
        inputDispatchConfiguration("Required", "Search String", "Optional", "Position Number", undefined, undefined);
        dispatch(
          setMethodDescription(
            "The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate."
          )
        );
        break;
      case "indexOf":
        dispatch(
          getOutput(input && parameter2 ? input.indexOf(parameter1, parameter2) : input && input.indexOf(parameter1))
        );
        inputDispatchConfiguration("Required", "Search String", "Optional", "Position Number", undefined, undefined);
        dispatch(
          setMethodDescription(
            "The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number."
          )
        );
        break;
      case "lastIndexOf":
        dispatch(
          getOutput(
            input && parameter2 ? input.lastIndexOf(parameter1, parameter2) : input && input.lastIndexOf(parameter1)
          )
        );
        inputDispatchConfiguration("Required", "Search String", "Optional", "Position Number", undefined, undefined);
        dispatch(
          setMethodDescription(
            "The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number."
          )
        );
        break;
      case "padEnd":
        dispatch(getOutput(input && input.padEnd(parameter1, parameter2)));
        inputDispatchConfiguration("Required", "Max Length Number", "Required", "Fill String", undefined, undefined);
        dispatch(
          setMethodDescription(
            "The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string."
          )
        );
        break;
      case "padStart":
        dispatch(getOutput(input && input.padStart(parameter1, parameter2)));
        inputDispatchConfiguration("Required", "Max Length Number", "Required", "Fill String", undefined, undefined);
        dispatch(
          setMethodDescription(
            "The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string."
          )
        );
        break;
      case "repeat":
        dispatch(getOutput(input && input.repeat(parameter1)));
        inputDispatchConfiguration("Required", "Count Number", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together."
          )
        );
        break;
      case "replace":
        dispatch(getOutput(input && input.replace(parameter1, parameter2)));
        inputDispatchConfiguration(
          "Required",
          "String to Change",
          "Required",
          "String to Replace",
          undefined,
          undefined
        );
        dispatch(
          setMethodDescription(
            "The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged."
          )
        );
        break;
      case "replaceAll":
        dispatch(getOutput(input && input.replaceAll(parameter1, parameter2)));
        inputDispatchConfiguration(
          "Required",
          "Strings to Change",
          "Required",
          "Strings to Replace",
          undefined,
          undefined
        );
        dispatch(
          setMethodDescription(
            "The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged."
          )
        );
        break;
      case "search":
        dispatch(getOutput(input && input.search(parameter1)));
        inputDispatchConfiguration("Required", "Search Value", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string."
          )
        );
        break;
      case "slice":
        dispatch(getOutput(input && (parameter2 ? input.slice(parameter1, parameter2) : input.slice(parameter1))));
        inputDispatchConfiguration("Required", "Start Number", "Optional", "End Number", undefined, undefined);
        dispatch(
          setMethodDescription(
            "The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string."
          )
        );
        break;
      case "split":
        dispatch(getOutput(input && (parameter2 ? input.split(parameter1, parameter2) : input.split(parameter1))));
        inputDispatchConfiguration("Required", "Separator Value", "Optional", "Limit Number", undefined, undefined);
        dispatch(
          setMethodDescription(
            "The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array."
          )
        );
        break;
      case "startsWith":
        dispatch(
          getOutput(input && (parameter2 ? input.startsWith(parameter1, parameter2) : input.startsWith(parameter1)))
        );
        inputDispatchConfiguration("Required", "Search String", "Optional", "Position Number", undefined, undefined);
        dispatch(
          setMethodDescription(
            "The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate."
          )
        );
        break;
      case "substring":
        dispatch(
          getOutput(input && (parameter2 ? input.substring(parameter1, parameter2) : input.substring(parameter1)))
        );
        inputDispatchConfiguration("Required", "Start Number", "Optional", "End Number", undefined, undefined);
        dispatch(
          setMethodDescription(
            "The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied."
          )
        );
        break;
      case "toLowerCase":
        dispatch(getOutput(input && input.toLowerCase()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription("The toLowerCase() method of String values returns this string converted to lower case.")
        );
        break;
      case "toString":
        dispatch(getOutput(input && input.toString()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(setMethodDescription("The toString() method of String values returns this string value."));
        break;
      case "toUpperCase":
        dispatch(getOutput(input && input.toUpperCase()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription("The toUpperCase() method of String values returns this string converted to uppercase.")
        );
        break;
      case "trim":
        dispatch(getOutput(input && input.trim()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string."
          )
        );
        break;
      case "trimEnd":
        dispatch(getOutput(input && input.trimEnd()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The trimEnd() method of String values removes whitespace from the end of this string and returns a new string, without modifying the original string. trimRight() is an alias of this method."
          )
        );
        break;
      case "trimStart":
        dispatch(getOutput(input && input.trimStart()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The trimStart() method of String values removes whitespace from the beginning of this string and returns a new string, without modifying the original string. trimLeft() is an alias of this method."
          )
        );
        break;
      default:
        queryParam !== undefined ? console.error("Error. Invalid Query Param") : null;
        break;
    }
  }, [queryParam, input, parameter1, parameter2]);
  return (
    <div className="grid grid-cols-12 ">
      <Methods methods={methods}></Methods>
      <div className="col-span-12 md:col-span-10 lg:col-span-10 xl:col-span-10 2xl:col-span-10 mt-5">
        {queryParam ? <FormComp></FormComp> : <MainPage></MainPage>}
      </div>
    </div>
  );
};

export default StringMethods;
