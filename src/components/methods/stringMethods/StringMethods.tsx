import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import FormComp from "../FormComp";
import Methods from "../Methods";
import { useDispatch, useSelector } from "react-redux";
import {
  getOutput,
  setHideInputs,
  setQueryParam,
} from "../../../redux/ValueSlice";

const StringMethods = () => {
  const methods: { [key: string]: string } = {
    CharAt: "?method=charat",
    Concat: "?method=concat",
    EndsWith: "?method=endswith",
    Includes: "?method=includes",
    IndexOf: "?method=indexOf",
    LastIndexOf: "?method=lastindexOf",
    LocaleCompare: "?method=localecompare",
    PadStart: "?method=padstart",
    PadEnd: "?method=padend",
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
  const input2 = useSelector(
    (state: { value: { input2: string } }) => state.value.input2
  );
  const parameterValues = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: { value: any }) => state.value.parameterValues
  );
  useEffect(() => {
    dispatch(setQueryParam(location.search.split("=")[1]));
  }, [dispatch, location.search]);

  useEffect(() => {
    console.warn(queryParam);
    switch (queryParam) {
      case "charat":
        dispatch(getOutput(input.charAt(parameterValues[0])));
        dispatch(setHideInputs({ hideInput2: true, hideParameter: false }));
        break;
      case "concat":
        dispatch(getOutput(input.concat(input2)));
        dispatch(setHideInputs({ hideInput2: false, hideParameter: true }));
        break;
      case "endswith":
        dispatch(getOutput(input.endsWith(parameterValues[0])));
        break;
      case "trim":
        dispatch(getOutput(input.trim()));
        break;

      default:
        console.error("Error. Invalid Query Param");
        break;
    }
  }, [queryParam, input, input2, parameterValues]);
  return (
    <div className="grid grid-cols-10">
      <Methods methods={methods}></Methods>
      <div className="col-span-8">
        <FormComp></FormComp>
      </div>
    </div>
  );
};

export default StringMethods;
