import { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

const DateDetail = () => {
  const [dateDsc, setDateDsc] = useState(`YYYY-MM-DDTHH:mm:ss.sssZ`);
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Date</h1>
      <p className="mb-6">
        JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects
        encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1,
        1970, UTC (the epoch)..
      </p>

      <h1 className="text-4xl font-bold mb-4">Description</h1>
      <p className="mb-6">
        A JavaScript date is fundamentally specified as the time in milliseconds that has elapsed since the epoch, which
        is defined as the midnight at the beginning of January 1, 1970, UTC (equivalent to the UNIX epoch). This
        timestamp is timezone-agnostic and uniquely defines an instant in history.
      </p>
      <p className="mb-6">
        The maximum timestamp representable by a Date object is slightly smaller than the maximum safe integer
        (Number.MAX_SAFE_INTEGER, which is 9,007,199,254,740,991). A Date object can represent a maximum of
        ±8,640,000,000,000,000 milliseconds, or ±100,000,000 (one hundred million) days, relative to the epoch. This is
        the range from April 20, 271821 BC to September 13, 275760 AD. Any attempt to represent a time outside this
        range results in the Date object holding a timestamp value of NaN, which is an "Invalid Date".
      </p>

      <h1 className="text-4xl font-bold mb-4">Date time string format</h1>
      <p className="mb-6">
        There are many ways to format a date as a string. The JavaScript specification only specifies one format to be
        universally supported: the date time string format, a simplification of the ISO 8601 calendar date extended
        format. The format is as follows:
      </p>

      <div className="space-y-5">
        <CodeEditor
          value={dateDsc}
          language="js"
          placeholder="Please enter JS code."
          onChange={(evn) => setDateDsc(evn.target.value)}
          padding={15}
          className="bg-gray-200 text-black font-mono"
        />
      </div>
    </div>
  );
};

export default DateDetail;
