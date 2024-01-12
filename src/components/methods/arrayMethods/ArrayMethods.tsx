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
    Splice: "?method=splice",
    Unshift: "?method=unshift",
  };
  const location = useLocation();
  const dispatch = useDispatch();
  const queryParam = useSelector((state: { value: { queryParam: string } }) => state.value.queryParam);
  const inputArray = useSelector((state: { value: { inputArray: any } }) => state.value.inputArray);
  const parameter1 = useSelector((state: { value: { parameter1: any } }) => state.value.parameter1);
  const parameter2 = useSelector((state: { value: { parameter2: any } }) => state.value.parameter2);
  const parameter3 = useSelector((state: { value: { parameter3: any } }) => state.value.parameter3);

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
    let everyMethod: any;
    let filterMethod: any;
    let findMethod: any;
    let findIndexMethod: any;
    let findLastMethod: any;
    let findLastIndexMethod: any;
    const forEachMethod: any = [];
    let mapMethod: any;
    let popArray: any;
    let pushArray: any;
    let reverseArray: any;
    let shiftArray: any;
    let someMethod: any;
    let sortArray: any;
    let spliceArray: any;
    let unshiftArray: any;
    let reduceMethod: any;
    let initialValue: any;
    switch (queryParam) {
      case "at":
        dispatch(getOutput(inputArray && inputArray.at(parameter1)));
        inputDispatchConfiguration("Required", "Index Number", undefined, undefined, undefined, undefined);
        break;
      case "concat":
        dispatch(
          getOutput(
            inputArray && parameter2
              ? inputArray.concat(parameter1, parameter2)
              : inputArray && inputArray.concat(parameter1)
          )
        );
        inputDispatchConfiguration("Required", "Arrays", "Optional", "Arrays", undefined, undefined);
        break;
      case "every":
        everyMethod = (currentValue: any) => currentValue < parseInt(parameter1);
        dispatch(getOutput(inputArray && inputArray.every(everyMethod)));
        inputDispatchConfiguration("Required", "Condition Value", undefined, undefined, undefined, undefined);
        break;
      case "fill":
        dispatch(
          getOutput(
            inputArray && parameter3
              ? [...inputArray].fill(parameter1, parameter2, parameter3)
              : inputArray && parameter2
              ? [...inputArray].fill(parameter1, parameter2)
              : inputArray && [...inputArray].fill(parameter1)
          )
        );
        inputDispatchConfiguration(
          "Required",
          "Fill Number",
          "Optional",
          "Starting Position",
          "Optional",
          "Ending Position"
        );
        break;
      case "filter":
        filterMethod = (currentValue: any) => currentValue > parseInt(parameter1);
        dispatch(getOutput(inputArray && inputArray.filter(filterMethod)));
        inputDispatchConfiguration("Required", "Condition Value", undefined, undefined, undefined, undefined);
        break;
      case "find":
        findMethod = (currentValue: any) => currentValue > parseInt(parameter1);
        dispatch(getOutput(inputArray && inputArray.find(findMethod)));
        inputDispatchConfiguration("Required", "Condition Value", undefined, undefined, undefined, undefined);
        break;
      case "findIndex":
        findIndexMethod = (currentValue: any) => currentValue > parseInt(parameter1);
        dispatch(getOutput(inputArray && inputArray.findIndex(findIndexMethod)));
        inputDispatchConfiguration("Required", "Condition Value", undefined, undefined, undefined, undefined);
        break;
      case "findLast":
        findLastMethod = (currentValue: any) => currentValue > parseInt(parameter1);
        dispatch(getOutput(inputArray && inputArray.findLast(findLastMethod)));
        inputDispatchConfiguration("Required", "Condition Value", undefined, undefined, undefined, undefined);
        break;
      case "findLastIndex":
        findLastIndexMethod = (currentValue: any) => currentValue > parseInt(parameter1);
        dispatch(getOutput(inputArray && inputArray.findLastIndex(findLastIndexMethod)));
        inputDispatchConfiguration("Required", "Condition Value", undefined, undefined, undefined, undefined);
        break;
      case "forEach":
        inputArray?.forEach((element: number) => {
          forEachMethod.push(element * parameter1);
        });
        dispatch(getOutput(forEachMethod));
        inputDispatchConfiguration("Required", "Condition Value", undefined, undefined, undefined, undefined);
        break;
      case "includes":
        dispatch(
          getOutput(
            inputArray && parameter2
              ? inputArray.includes(parameter1, parameter2)
              : inputArray && inputArray.includes(parameter1)
          )
        );
        inputDispatchConfiguration("Required", "Search Value", "Optional", "From Index", undefined, undefined);
        break;
      case "indexOf":
        dispatch(
          getOutput(
            inputArray && (parameter2 ? inputArray.indexOf(parameter1, parameter2) : inputArray.indexOf(parameter1))
          )
        );
        inputDispatchConfiguration("Required", "Search Value", "Optional", "From Index", undefined, undefined);
        break;
      case "join":
        dispatch(getOutput(inputArray?.join(parameter1)));
        inputDispatchConfiguration("Required", "Search Value", undefined, undefined, undefined, undefined);
        break;
      case "lastIndexOf":
        dispatch(
          getOutput(
            inputArray &&
              (parameter2 ? inputArray.lastIndexOf(parameter1, parameter2) : inputArray.lastIndexOf(parameter1))
          )
        );
        inputDispatchConfiguration("Required", "Search Value", "Optional", "From Index", undefined, undefined);
        break;
      case "map":
        mapMethod = (currentValue: any) => currentValue * parseInt(parameter1);
        dispatch(getOutput(inputArray && inputArray.map(mapMethod)));
        inputDispatchConfiguration("Required", "Value", undefined, undefined, undefined, undefined);
        break;
      case "pop":
        popArray = inputArray ? [...inputArray] : [];
        popArray.pop();
        dispatch(getOutput(popArray));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        break;
      case "push":
        pushArray = inputArray ? [...inputArray] : [];
        pushArray.push(parameter1);
        dispatch(getOutput(pushArray));
        inputDispatchConfiguration("Required", "Value", undefined, undefined, undefined, undefined);
        break;
      case "reduce":
        reduceMethod = (accumulator: number, currentValue: string) => accumulator + parseInt(currentValue, 10);
        initialValue = parseInt(parameter1);
        dispatch(getOutput(inputArray && inputArray.reduce(reduceMethod, initialValue)));
        inputDispatchConfiguration("Required", "Initial Value", undefined, undefined, undefined, undefined);
        break;
      case "reverse":
        reverseArray = inputArray ? [...inputArray] : [];
        dispatch(getOutput(reverseArray.reverse()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        break;
      case "shift":
        shiftArray = inputArray ? [...inputArray] : [];
        shiftArray.shift();
        dispatch(getOutput(shiftArray));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        break;
      case "slice":
        dispatch(
          getOutput(
            inputArray && (parameter2 ? inputArray.slice(parameter1, parameter2) : inputArray.slice(parameter1))
          )
        );
        inputDispatchConfiguration("Optional", "Starting Value", "Optional", "Ending Value", undefined, undefined);
        break;
      case "some":
        someMethod = (currentValue: any) => currentValue === parameter1;
        dispatch(getOutput(inputArray && inputArray.some(someMethod)));
        console.log(someMethod);
        inputDispatchConfiguration("Required", "Condition Value", undefined, undefined, undefined, undefined);
        break;
      case "sort":
        sortArray = inputArray ? [...inputArray] : [];
        dispatch(getOutput(sortArray.sort()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        break;
      case "splice":
        spliceArray = inputArray ? [...inputArray] : [];
        inputArray && parameter3
          ? spliceArray.splice(parameter1, parameter2, parameter3)
          : inputArray && parameter2
          ? spliceArray.splice(parameter1, parameter2)
          : spliceArray.splice(parameter1);
        dispatch(getOutput(spliceArray));
        inputDispatchConfiguration("Required", "Start", "Optional", "Delete Count", "Optional", "Item");
        break;
      case "unshift":
        unshiftArray = inputArray ? [...inputArray] : [];
        unshiftArray.shift();
        dispatch(getOutput(unshiftArray));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        break;
      default:
        console.error("Error. Invalid Query Param");
        break;
    }
  }, [queryParam, inputArray, parameter1, parameter2, parameter3]);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-10">{queryParam ? <FormComp></FormComp> : <MainPage></MainPage>}</div>
      <Methods methods={methods}></Methods>
    </div>
  );
};

export default ArrayMethods;
