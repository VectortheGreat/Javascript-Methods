import { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

const ArrayDetails = () => {
  const [stringDsc1, setStringDsc1] = useState(
    `const fruits = [];\nfruits.push("banana", "apple", "peach");\nconsole.log(fruits.length); // 3\`;`
  );
  const [stringDsc2, setStringDsc2] = useState(
    `fruits[5] = "mango";\nconsole.log(fruits[5]); // 'mango'\nconsole.log(Object.keys(fruits)); // ['0', '1', '2', '5']\nconsole.log(fruits.length); // 6\`;`
  );
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Array</h1>
      <p className="mb-6">
        The Array object, as with arrays in other programming languages, enables
        storing a collection of multiple items under a single variable name, and
        has members for performing common array operations.
      </p>

      <h1 className="text-4xl font-bold mb-4">Description</h1>
      <p className="mb-6">
        In JavaScript, arrays aren't primitives but are instead Array objects
        with the following core characteristics:
      </p>
      <ul className="list-disc pl-4 mb-8">
        <li className="mb-2">
          JavaScript arrays are resizable and can contain a mix of different
          data types. (When those characteristics are undesirable, use typed
          arrays instead.)
        </li>
        <li className="mb-2">
          JavaScript arrays are not associative arrays and so, array elements
          cannot be accessed using arbitrary strings as indexes, but must be
          accessed using nonnegative integers (or their respective string form)
          as indexes.
        </li>
        <li className="mb-2">
          JavaScript arrays are zero-indexed: the first element of an array is
          at index 0, the second is at index 1, and so on — and the last element
          is at the value of the array's length property minus 1.
        </li>
        <li className="mb-2">
          JavaScript array-copy operations create shallow copies. (All standard
          built-in copy operations with any JavaScript objects create shallow
          copies, rather than deep copies).
        </li>
      </ul>

      <h1 className="text-4xl font-bold mb-4">Creating Array</h1>

      <div className="space-y-5">
        <CodeEditor
          value={stringDsc1}
          language="js"
          placeholder="Please enter JS code."
          onChange={(evn) => setStringDsc1(evn.target.value)}
          padding={15}
          className="bg-gray-200 text-black font-mono"
        />
        <CodeEditor
          disabled
          value={stringDsc2}
          language="js"
          placeholder="Please enter JS code."
          onChange={(evn) => setStringDsc2(evn.target.value)}
          padding={15}
          className="bg-gray-200 text-black font-mono"
        />
      </div>
    </div>
  );
};

export default ArrayDetails;
