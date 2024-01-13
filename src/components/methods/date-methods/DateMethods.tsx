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
import FormComp from "../FormComp";
import MainPage from "../MainPage";
import Methods from "../Methods";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const DateMethods = () => {
  const methods: { [key: string]: string } = {
    GetDate: "?method=getDate",
    GetDay: "?method=getDay",
    GetFullYear: "?method=getFullYear",
    GetHours: "?method=getHours",
    GetMinutes: "?method=getMinutes",
    GetMonth: "?method=getMonth",
    GetSeconds: "?method=getSeconds",
    SetDate: "?method=setDate",
    SetFullYear: "?method=setFullYear",
    SetHours: "?method=setHours",
    SetMinutes: "?method=setMinutes",
    SetMonth: "?method=setMonth",
    SetSeconds: "?method=setSeconds",
    ToDateString: "?method=toDateString",
    ToISOString: "?method=toISOString",
    ToString: "?method=toString",
    ToTimeString: "?method=toTimeString",
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
    let date: any;
    switch (queryParam) {
      case "getDate":
        date = new Date(input);
        dispatch(getOutput(date.getDate()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The getDate() method of Date instances returns the day of the month for this date according to local time."
          )
        );
        break;
      case "getDay":
        date = new Date(input);
        dispatch(getOutput(date.getDay()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The getDay() method of Date instances returns the day of the week for this date according to local time, where 0 represents Sunday. For the day of the month, see Date.prototype.getDate()."
          )
        );
        break;
      case "getFullYear":
        date = new Date(input);
        dispatch(getOutput(date.getFullYear()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The getFullYear() method of Date instances returns the year for this date according to local time."
          )
        );
        break;
      case "getHours":
        date = new Date(input);
        dispatch(getOutput(date.getHours()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The getHours() method of Date instances returns the hours for this date according to local time."
          )
        );
        break;
      case "getMinutes":
        date = new Date(input);
        dispatch(getOutput(date.getMinutes()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The getMinutes() method of Date instances returns the minutes for this date according to local time."
          )
        );
        break;
      case "getMonth":
        date = new Date(input);
        dispatch(getOutput(date.getMonth()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The getMonth() method of Date instances returns the month for this date according to local time, as a zero-based value (where zero indicates the first month of the year)."
          )
        );
        break;
      case "getSeconds":
        date = new Date(input);
        dispatch(getOutput(date.getSeconds()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The getSeconds() method of Date instances returns the seconds for this date according to local time."
          )
        );
        break;
      case "setDate":
        date = new Date(input);
        date.setDate(parseInt(parameter1));
        dispatch(getOutput(date));
        inputDispatchConfiguration("Required", "Date", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The setDate() method of Date instances changes the day of the month for this date according to local time."
          )
        );
        break;
      case "setFullYear":
        date = new Date(input);
        date.setFullYear(parseInt(parameter1));
        dispatch(getOutput(date));
        inputDispatchConfiguration("Required", "Year", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The setFullYear() method of Date instances changes the year, month, and/or day of month for this date according to local time."
          )
        );
        break;
      case "setHours":
        date = new Date(input);
        date.setHours(parseInt(parameter1));
        dispatch(getOutput(date));
        inputDispatchConfiguration("Required", "Hours", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The setHours() method of Date instances changes the hours, minutes, seconds, and/or milliseconds for this date according to local time."
          )
        );
        break;
      case "setMinutes":
        date = new Date(input);
        date.setMinutes(parseInt(parameter1));
        dispatch(getOutput(date));
        inputDispatchConfiguration("Required", "Minutes", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The setMinutes() method of Date instances changes the minutes for this date according to local time."
          )
        );
        break;
      case "setMonth":
        date = new Date(input);
        date.setMonth(parseInt(parameter1));
        dispatch(getOutput(date));
        inputDispatchConfiguration("Required", "Month(0-11)", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The setMonth() method of Date instances changes the month and/or day of the month for this date according to local time."
          )
        );
        break;
      case "setSeconds":
        date = new Date(input);
        date.setSeconds(parseInt(parameter1));
        dispatch(getOutput(date));
        inputDispatchConfiguration("Required", "Seconds", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The setSeconds() method of Date instances changes the seconds and/or milliseconds for this date according to local time."
          )
        );
        break;
      case "toDateString":
        date = new Date(input);
        dispatch(getOutput(date.toDateString()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The toDateString() method of Date instances returns a string representing the date portion of this date interpreted in the local timezone."
          )
        );
        break;
      case "toISOString":
        date = new Date(input);
        if (!isNaN(date.getTime())) {
          dispatch(getOutput(date.toISOString()));
        } else {
          dispatch(getOutput("Invalid date input. Please provide a valid date."));
        }
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The toISOString() method of Date instances returns a string representing this date in the date time string format, a simplified format based on ISO 8601, which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively). The timezone is always UTC, as denoted by the suffix Z."
          )
        );
        break;
      case "toString":
        date = new Date(input);
        dispatch(getOutput(date.toString()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The toString() method of Date instances returns a string representing this date interpreted in the local timezone."
          )
        );
        break;
      case "toTimeString":
        date = new Date(input);
        dispatch(getOutput(date.toTimeString()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The toTimeString() method of Date instances returns a string representing the time portion of this date interpreted in the local timezone."
          )
        );
        break;
      default:
        queryParam !== undefined ? console.error("Error. Invalid Query Param") : null;
        break;
    }
  }, [queryParam, input, parameter1]);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-10">{queryParam ? <FormComp></FormComp> : <MainPage></MainPage>}</div>
      <Methods methods={methods}></Methods>
    </div>
  );
};

export default DateMethods;
