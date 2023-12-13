import { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

const StringDetail = () => {
  const [stringDsc1, setStringDsc1] = useState(
    `const string1 = "A string primitive";\nconst string2 = 'Also a string primitive';\nconst string3 = \`Yet another string primitive\`;`
  );
  const [stringDsc2, setStringDsc2] = useState(
    `const string4 = new String("A String object");`
  );
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">String</h1>
      <p className="mb-6">
        The String object is used to represent and manipulate a sequence of
        characters.
      </p>

      <h1 className="text-4xl font-bold mb-4">Description</h1>
      <p className="mb-6">
        Strings are useful for holding data that can be represented in text
        form. Some of the most-used operations on strings are to check their
        length, to build and concatenate them using the + and += string
        operators, checking for the existence or location of substrings with the
        indexOf() method, or extracting substrings with the substring() method.
      </p>

      <h1 className="text-4xl font-bold mb-4">Creating strings</h1>
      <p className="mb-6">
        Strings can be created as primitives, from string literals, or as
        objects, using the String() constructor:
      </p>

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

export default StringDetail;
