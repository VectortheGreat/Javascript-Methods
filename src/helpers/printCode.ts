export const printCode = (
  pathname: string,
  param: string,
  input: string,
  parameter1: string,
  parameter2: string
) => {
  if (pathname === "string") {
    switch (param) {
      case "charat":
        if (parameter1) {
          return `const input = "${input}"; \nconsole.log(input.charAt(${parameter1}));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.charAt());`;
        }
      case "concat":
        if (!parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.concat("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = "${input}"; \nconsole.log(input.concat("${parameter2}"));`;
        } else if (parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.concat("${parameter1}","${parameter2}"));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.concat());`;
        }
      case "endswith":
        if (!parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.endswith("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = "${input}"; \nconsole.log(input.endswith(${parameter2}));`;
        } else if (parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.endswith("${parameter1}",${parameter2}));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.endswith());`;
        }
      case "includes":
        if (!parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.includes("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = "${input}"; \nconsole.log(input.includes(${parameter2}));`;
        } else if (parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.includes("${parameter1}",${parameter2}));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.includes());`;
        }
      case "indexof":
        if (!parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.indexOf("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = "${input}"; \nconsole.log(input.indexOf(${parameter2}));`;
        } else if (parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.indexOf("${parameter1}",${parameter2}));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.indexOf());`;
        }
      case "lastindexof":
        if (!parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.lastIndexOf("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = "${input}"; \nconsole.log(input.lastIndexOf(${parameter2}));`;
        } else if (parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.lastIndexOf("${parameter1}",${parameter2}));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.lastIndexOf());`;
        }
      case "padend":
        if (!parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.padEnd("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = "${input}"; \nconsole.log(input.padEnd("${parameter2}"));`;
        } else if (parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.padEnd("${parameter1}","${parameter2}"));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.padEnd());`;
        }
      case "padstart":
        if (!parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.padStart("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = "${input}"; \nconsole.log(input.padStart("${parameter2}"));`;
        } else if (parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.padStart("${parameter1}","${parameter2}"));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.padStart());`;
        }
      case "repeat":
        if (parameter1) {
          return `const input = "${input}"; \nconsole.log(input.repeat(${parameter1}));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.repeat());`;
        }
      case "replace":
        if (!parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.replace("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = "${input}"; \nconsole.log(input.replace("${parameter2}"));`;
        } else if (parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.replace("${parameter1}","${parameter2}"));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.replace());`;
        }
      case "replaceall":
        if (!parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.replaceAll("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = "${input}"; \nconsole.log(input.replaceAll("${parameter2}"));`;
        } else if (parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.replaceAll("${parameter1}","${parameter2}"));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.replaceAll());`;
        }
      case "search":
        if (parameter1) {
          return `const input = "${input}"; \nconsole.log(input.search("${parameter1}"));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.search());`;
        }
      case "slice":
        if (!parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.slice(${parameter1}));`;
        } else if (!parameter1 && parameter2) {
          return `const input = "${input}"; \nconsole.log(input.slice(${parameter2}));`;
        } else if (parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.slice(${parameter1},${parameter2}));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.slice());`;
        }
      case "split":
        if (!parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.split("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = "${input}"; \nconsole.log(input.split(${parameter2}));`;
        } else if (parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.split("${parameter1}",${parameter2}));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.split());`;
        }
      case "startswith":
        if (!parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.startsWith("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = "${input}"; \nconsole.log(input.startsWith(${parameter2}));`;
        } else if (parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.startsWith("${parameter1}",${parameter2}));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.startsWith());`;
        }
      case "substring":
        if (!parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.substring(${parameter1}));`;
        } else if (!parameter1 && parameter2) {
          return `const input = "${input}"; \nconsole.log(input.substring(${parameter2}));`;
        } else if (parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.substring(${parameter1},${parameter2}));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.substring());`;
        }
      case "tolowercase":
        return `const input = "${input}"; \nconsole.log(input.toLowerCase());`;
      case "tostring":
        return `const input = "${input}"; \nconsole.log(input.toString());`;
      case "touppercase":
        return `const input = "${input}"; \nconsole.log(input.toUpperCase());`;
      case "trim":
        return `const input = "${input}"; \nconsole.log(input.trim());`;
      case "trimend":
        return `const input = "${input}"; \nconsole.log(input.trimEnd());`;
      case "trimstart":
        return `const input = "${input}"; \nconsole.log(input.trimStart());`;
      default:
        return `Invalid Query Param`;
    }
  } else {
    console.error("Invalid Pathname");
  }
};
