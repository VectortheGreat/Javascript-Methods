export const printCode = (
  pathname: string,
  param: string,
  input: string,
  parameter1: string,
  parameter2: string,
  parameter3: string,
  parameter4: string
) => {
  if (pathname === "string") {
    switch (param) {
      case "charat":
        return `const input = "${input}"; \nconsole.log(input.charAt(${parameter1}));`;
      case "concat":
        if (parameter1 !== undefined) {
          console.log("p4 yok");
          return `const input = "${input}"; \nconsole.log(input.charAt(${parameter1}));`;
        } else if (parameter2 !== undefined) {
          console.log("p3 yok");
          return `const input = "${input}"; \nconsole.log(input.charAt(${parameter1},${parameter2}));`;
        } else if (parameter3 !== undefined) {
          console.log("p2 yok");
          return `const input = "${input}"; \nconsole.log(input.charAt(${parameter1},${parameter2},${parameter3}));`;
        } else {
          console.log("p1 yok");
          return `const input = "${input}"; \nconsole.log(input.charAt(${parameter1},${parameter2},${parameter3},${parameter4}));`;
        }
      default:
        return `const input = "${input}"; \nconsole.log(input.charAt(0));`;
    }
  } else {
    console.error("Invalid Pathname");
  }
};
