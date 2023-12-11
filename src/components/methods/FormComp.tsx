import { useDispatch, useSelector } from "react-redux";
import {
  getInput,
  getParameter1,
  getParameter2,
  getParameter3,
  getParameter4,
} from "../../redux/ValueSlice";
import { useEffect } from "react";

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
  const parameter3 = useSelector(
    (state: { value: { parameter3: string } }) => state.value.parameter3
  );
  const parameter4 = useSelector(
    (state: { value: { parameter4: string } }) => state.value.parameter4
  );
  const queryParam = useSelector(
    (state: { value: { queryParam: string } }) => state.value.queryParam
  );
  const hideInputs = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: { value: any }) => state.value.hideInputs
  );
  const optionalParameters = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: { value: any }) => state.value.optionalParameters
  );
  const placeholderValue1 = optionalParameters.optionalParameter1
    ? "Parameter 1 (Optional)"
    : "Parameter 1 (Required)";
  const placeholderValue2 = optionalParameters.optionalParameter2
    ? "Parameter 2 (Optional)"
    : "Parameter 2 (Required)";
  const placeholderValue3 = optionalParameters.optionalParameter3
    ? "Parameter 3 (Optional)"
    : "Parameter 3 (Required)";
  const placeholderValue4 = optionalParameters.optionalParameter4
    ? "Parameter 4 (Optional)"
    : "Parameter 4 (Required)";
  useEffect(() => {
    dispatch(getInput(""));
    dispatch(getParameter1(""));
    dispatch(getParameter2(""));
    dispatch(getParameter3(""));
    dispatch(getParameter4(""));
  }, [queryParam]);
  return (
    <form
      onSubmit={testfunc}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
    >
      <div className="mb-4 space-y-4">
        <input
          type="text"
          id="input"
          name="input"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Input"
          value={input}
          onChange={(e) => dispatch(getInput(e.target.value))}
        />
        {hideInputs.hideParameter1 ? null : (
          <input
            type="text"
            id="input2"
            name="input2"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
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
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
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
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder={placeholderValue3}
            value={parameter3}
            onChange={(e) => dispatch(getParameter3(e.target.value))}
          />
        )}
        {hideInputs.hideParameter4 ? null : (
          <input
            type="text"
            id="input"
            name="input"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder={placeholderValue4}
            value={parameter4}
            onChange={(e) => dispatch(getParameter4(e.target.value))}
          />
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Output
        </label>
        <input
          disabled
          type="text"
          id="output"
          name="output"
          value={output}
          className="w-full px-3 py-2 border rounded-md bg-gray-100"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComp;
