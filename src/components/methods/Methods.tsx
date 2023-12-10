import FormComp from "./FormComp";

const Methods = ({ methods }) => {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-1">
        <ul>
          {Object.keys(methods).map((method) => (
            <li
              key={method}
              className="text-lg cursor-pointer text-center rounded-md"
            >
              {method}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-9">
        <FormComp></FormComp>
      </div>
    </div>
  );
};

export default Methods;
