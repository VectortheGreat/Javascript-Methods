import { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

const NumberDetail = () => {
  const [numberDsc1, setNumberDsc1] = useState(
    `255; // two-hundred and fifty-five\n255.0; // same number\n255 === 255.0; // true\`255 === 0xff; // true (hexadecimal notation)\n255 === 0b11111111; // true (binary notation)\n255 === 0.255e3; // true (decimal exponential notation)\`;`
  );
  const [numberDsc2, setNumberDsc2] = useState(
    `Number("123"); // returns the number 123\nNumber("123") === 123; // true\nNumber("unicorn"); // NaN\nNumber(undefined); // NaN`
  );
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Number</h1>
      <p className="mb-6">Numbers are most commonly expressed in literal forms like 255 or 3.14159.</p>

      <h1 className="text-4xl font-bold mb-4">Description</h1>
      <p className="mb-6">
        The Number constructor contains constants and methods for working with numbers. Values of other types can be
        converted to numbers using the Number() function.
      </p>

      <div className="space-y-5">
        <CodeEditor
          value={numberDsc1}
          language="js"
          placeholder="Please enter JS code."
          onChange={(evn) => setNumberDsc1(evn.target.value)}
          padding={15}
          className="bg-gray-100 text-black font-mono"
        />
        <CodeEditor
          disabled
          value={numberDsc2}
          language="js"
          placeholder="Please enter JS code."
          onChange={(evn) => setNumberDsc2(evn.target.value)}
          padding={15}
          className="bg-gray-100 text-black font-mono"
        />
      </div>
    </div>
  );
};

export default NumberDetail;
