import { useDispatch } from "react-redux";
import { getInput } from "../../redux/ValueSlice";

const FormComp = () => {
  const dispatch = useDispatch();
  const testfunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("test");
  };
  return (
    <form
      onSubmit={testfunc}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Input
        </label>
        <input
          type="text"
          id="input"
          name="input"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          onChange={(e) => dispatch(getInput(e.target.value))}
        />
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
