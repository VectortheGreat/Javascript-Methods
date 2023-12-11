import { useDispatch, useSelector } from "react-redux";
import {
  getInput,
  getInput2,
  getParameterValues,
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
  const input2 = useSelector(
    (state: { value: { input2: string } }) => state.value.input2
  );
  const parameterValues = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: { value: any }) => state.value.parameterValues
  );
  const queryParam = useSelector(
    (state: { value: { queryParam: string } }) => state.value.queryParam
  );
  const hideInputs = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: { value: any }) => state.value.hideInputs
  );
  useEffect(() => {
    dispatch(getInput(""));
    dispatch(getInput2(""));
    dispatch(getParameterValues(""));
  }, [queryParam]);
  console.log(hideInputs);
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
        {hideInputs.hideInput2 ? null : (
          <input
            type="text"
            id="input2"
            name="input2"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Input"
            value={input2}
            onChange={(e) => dispatch(getInput2(e.target.value))}
          />
        )}
        {hideInputs.hideParameter ? null : (
          <input
            type="text"
            id="input"
            name="input"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Parameter"
            value={parameterValues}
            onChange={(e) => dispatch(getParameterValues(e.target.value))}
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
