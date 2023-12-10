import Methods from "../Methods";

const StringMethods = () => {
  const methods: { [key: string]: string } = {
    String: "?method=test",
    Integer: "/integer",
    Array: "/array",
    Date: "/date",
    Json: "/json",
    Math: "/math",
  };
  return (
    <div>
      <Methods methods={methods}></Methods>
    </div>
  );
};

export default StringMethods;
