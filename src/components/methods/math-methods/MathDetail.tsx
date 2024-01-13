const MathDetail = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Math</h1>
      <p className="mb-6">
        The Math namespace object contains static properties and methods for mathematical constants and functions. Math
        works with the Number type. It doesn't work with BigInt.
      </p>

      <h1 className="text-4xl font-bold mb-4">Description</h1>
      <p className="mb-6">
        Unlike most global objects, Math is not a constructor. You cannot use it with the new operator or invoke the
        Math object as a function. All properties and methods of Math are static.
      </p>
    </div>
  );
};

export default MathDetail;
