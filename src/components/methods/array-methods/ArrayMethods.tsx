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
  setMethodDescription,
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
        dispatch(
          setMethodDescription(
            "The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array."
          )
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
        inputDispatchConfiguration("Required", "Arrays", "Optional", "Arrays", undefined, undefined);
        dispatch(
          setMethodDescription(
            "The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array."
          )
        );

        break;
      case "every":
        everyMethod = (currentValue: any) => currentValue < parseInt(parameter1);
        dispatch(getOutput(inputArray && inputArray.every(everyMethod)));
        inputDispatchConfiguration("Required", "Condition Value", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value."
          )
        );
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
        dispatch(
          setMethodDescription(
            "The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array."
          )
        );
        break;
      case "filter":
        filterMethod = (currentValue: any) => currentValue > parseInt(parameter1);
        dispatch(getOutput(inputArray && inputArray.filter(filterMethod)));
        inputDispatchConfiguration("Required", "Condition Value", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function."
          )
        );
        break;
      case "find":
        findMethod = (currentValue: any) => currentValue > parseInt(parameter1);
        dispatch(getOutput(inputArray && inputArray.find(findMethod)));
        inputDispatchConfiguration("Required", "Condition Value", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned."
          )
        );
        break;
      case "findIndex":
        findIndexMethod = (currentValue: any) => currentValue > parseInt(parameter1);
        dispatch(getOutput(inputArray && inputArray.findIndex(findIndexMethod)));
        inputDispatchConfiguration("Required", "Condition Value", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned."
          )
        );
        break;
      case "findLast":
        findLastMethod = (currentValue: any) => currentValue > parseInt(parameter1);
        dispatch(getOutput(inputArray && inputArray.findLast(findLastMethod)));
        inputDispatchConfiguration("Required", "Condition Value", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned."
          )
        );
        break;
      case "findLastIndex":
        findLastIndexMethod = (currentValue: any) => currentValue > parseInt(parameter1);
        dispatch(getOutput(inputArray && inputArray.findLastIndex(findLastIndexMethod)));
        inputDispatchConfiguration("Required", "Condition Value", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned."
          )
        );
        break;
      case "forEach":
        inputArray?.forEach((element: number) => {
          forEachMethod.push(element * parameter1);
        });
        dispatch(getOutput(forEachMethod));
        inputDispatchConfiguration("Required", "Condition Value", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The forEach() method of Array instances executes a provided function once for each array element."
          )
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
        inputDispatchConfiguration("Required", "Search Value", "Optional", "From Index", undefined, undefined);
        dispatch(
          setMethodDescription(
            "The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate."
          )
        );
        break;
      case "indexOf":
        dispatch(
          getOutput(
            inputArray && (parameter2 ? inputArray.indexOf(parameter1, parameter2) : inputArray.indexOf(parameter1))
          )
        );
        inputDispatchConfiguration("Required", "Search Value", "Optional", "From Index", undefined, undefined);
        dispatch(
          setMethodDescription(
            "The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present."
          )
        );
        break;
      case "join":
        dispatch(getOutput(inputArray?.join(parameter1)));
        inputDispatchConfiguration("Required", "Search Value", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator."
          )
        );
        break;
      case "lastIndexOf":
        dispatch(
          getOutput(
            inputArray &&
              (parameter2 ? inputArray.lastIndexOf(parameter1, parameter2) : inputArray.lastIndexOf(parameter1))
          )
        );
        inputDispatchConfiguration("Required", "Search Value", "Optional", "From Index", undefined, undefined);
        dispatch(
          setMethodDescription(
            "The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex."
          )
        );
        break;
      case "map":
        mapMethod = (currentValue: any) => currentValue * parseInt(parameter1);
        dispatch(getOutput(inputArray && inputArray.map(mapMethod)));
        inputDispatchConfiguration("Required", "Value", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array."
          )
        );
        break;
      case "pop":
        popArray = inputArray ? [...inputArray] : [];
        dispatch(getOutput(popArray.pop()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array."
          )
        );
        break;
      case "push":
        pushArray = inputArray ? [...inputArray] : [];
        pushArray.push(parameter1);
        dispatch(getOutput(pushArray));
        inputDispatchConfiguration("Required", "Value", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array."
          )
        );
        break;
      case "reduce":
        reduceMethod = (accumulator: number, currentValue: string) => accumulator + parseInt(currentValue, 10);
        initialValue = parseInt(parameter1);
        dispatch(getOutput(inputArray && inputArray.reduce(reduceMethod, initialValue)));
        inputDispatchConfiguration("Required", "Initial Value", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The reduce() method of Array instances executes a user-supplied 'reducer' callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value. The first time that the callback is run there is no 'return value of the previous calculation'. If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0)."
          )
        );
        break;
      case "reverse":
        reverseArray = inputArray ? [...inputArray] : [];
        dispatch(getOutput(reverseArray.reverse()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated."
          )
        );
        break;
      case "shift":
        shiftArray = inputArray ? [...inputArray] : [];
        dispatch(getOutput(shiftArray.shift()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array."
          )
        );
        break;
      case "slice":
        dispatch(
          getOutput(
            inputArray && (parameter2 ? inputArray.slice(parameter1, parameter2) : inputArray.slice(parameter1))
          )
        );
        inputDispatchConfiguration("Optional", "Starting Value", "Optional", "Ending Value", undefined, undefined);
        dispatch(
          setMethodDescription(
            "The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified."
          )
        );
        break;
      case "some":
        someMethod = (currentValue: any) => currentValue === parameter1;
        dispatch(getOutput(inputArray && inputArray.some(someMethod)));
        inputDispatchConfiguration("Required", "Condition Value", undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array."
          )
        );
        break;
      case "sort":
        sortArray = inputArray ? [...inputArray] : [];
        dispatch(getOutput(sortArray.sort()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values."
          )
        );
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
        dispatch(
          setMethodDescription(
            "The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place."
          )
        );
        break;
      case "unshift":
        unshiftArray = inputArray ? [...inputArray] : [];
        dispatch(getOutput(unshiftArray.unshift()));
        inputDispatchConfiguration(undefined, undefined, undefined, undefined, undefined, undefined);
        dispatch(
          setMethodDescription(
            "The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array."
          )
        );
        break;
      default:
        queryParam !== undefined ? console.error("Error. Invalid Query Param") : null;
        break;
    }
  }, [queryParam, inputArray, parameter1, parameter2, parameter3]);
  return (
    <div className="grid grid-cols-12 ">
      <Methods methods={methods}></Methods>
      <div className="col-span-12 md:col-span-10 lg:col-span-10 xl:col-span-10 2xl:col-span-10 mt-5">
        {queryParam ? <FormComp></FormComp> : <MainPage></MainPage>}
      </div>
    </div>
  );
};

export default ArrayMethods;
