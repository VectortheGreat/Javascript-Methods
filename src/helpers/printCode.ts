export const printCode = (
  pathname: string,
  param: string,
  input: string | number,
  parameter1: string | number,
  parameter2: string | number,
  parameter3: string | number
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
      case "endsWith":
        if (!parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.endsWith("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = "${input}"; \nconsole.log(input.endsWith(${parameter2}));`;
        } else if (parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.endsWith("${parameter1}",${parameter2}));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.endsWith());`;
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
      case "indexOf":
        if (!parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.indexOf("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = "${input}"; \nconsole.log(input.indexOf(${parameter2}));`;
        } else if (parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.indexOf("${parameter1}",${parameter2}));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.indexOf());`;
        }
      case "lastIndexOf":
        if (!parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.lastIndexOf("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = "${input}"; \nconsole.log(input.lastIndexOf(${parameter2}));`;
        } else if (parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.lastIndexOf("${parameter1}",${parameter2}));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.lastIndexOf());`;
        }
      case "padEnd":
        if (!parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.padEnd("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = "${input}"; \nconsole.log(input.padEnd("${parameter2}"));`;
        } else if (parameter2 && parameter1) {
          return `const input = "${input}"; \nconsole.log(input.padEnd("${parameter1}","${parameter2}"));`;
        } else {
          return `const input = "${input}"; \nconsole.log(input.padEnd());`;
        }
      case "padStart":
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
      case "replaceAll":
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
      case "startsWith":
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
      case "toLowerCase":
        return `const input = "${input}"; \nconsole.log(input.toLowerCase());`;
      case "toString":
        return `const input = "${input}"; \nconsole.log(input.toString());`;
      case "toUpperCase":
        return `const input = "${input}"; \nconsole.log(input.toUpperCase());`;
      case "trim":
        return `const input = "${input}"; \nconsole.log(input.trim());`;
      case "trimEnd":
        return `const input = "${input}"; \nconsole.log(input.trimEnd());`;
      case "trimStart":
        return `const input = "${input}"; \nconsole.log(input.trimStart());`;
      default:
        return `Invalid Query Param`;
    }
  } else if (pathname === "array") {
    switch (param) {
      case "at":
        if (parameter1) {
          return `const input = [${input}]; \nconsole.log(input.charAt("${parameter1}"));`;
        } else {
          return `const input = [${input}]; \nconsole.log(input.charAt());`;
        }
      case "concat":
        if (!parameter2 && parameter1) {
          return `const input = [${input}]; \nconsole.log(input.concat("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = [${input}]; \nconsole.log(input.concat("${parameter2}"));`;
        } else if (parameter2 && parameter1) {
          return `const input = [${input}]; \nconsole.log(input.concat("${parameter1}","${parameter2}"));`;
        } else {
          return `const input = [${input}]; \nconsole.log(input.concat());`;
        }
      case "every":
        if (parameter1) {
          return `const input = [${input}]; \nconst isBelowThreshold = (currentValue) => currentValue < ${parameter1}; \nconsole.log(input.every(isBelowThreshold"));`;
        } else {
          return `const input = [${input}]; \nconst isBelowThreshold = (currentValue) => currentValue < ; \nconsole.log(input.every(isBelowThreshold));`;
        }
      case "fill":
        if (parameter1 && parameter2 && parameter3) {
          return `const input = [${input}]; \nconsole.log(input.fill("${parameter1}", "${parameter2}", "${parameter3}"));`;
        } else if (parameter1 && parameter2 && !parameter3) {
          return `const input = [${input}]; \nconsole.log(input.fill("${parameter1}", "${parameter2}"));`;
        } else if (parameter1 && !parameter2 && parameter3) {
          return `const input = [${input}]; \nconsole.log(input.fill("${parameter1}", "${parameter3}"));`;
        } else if (!parameter1 && parameter2 && parameter3) {
          return `const input = [${input}]; \nconsole.log(input.fill("${parameter2}", "${parameter3}"));`;
        } else if (parameter1 && !parameter2 && !parameter3) {
          return `const input = [${input}]; \nconsole.log(input.fill("${parameter1}"));`;
        } else if (!parameter1 && parameter2 && !parameter3) {
          return `const input = [${input}]; \nconsole.log(input.fill("${parameter2}"));`;
        } else if (!parameter1 && !parameter2 && parameter3) {
          return `const input = [${input}]; \nconsole.log(input.fill("${parameter3}"));`;
        } else if (!parameter1 && !parameter2 && !parameter3) {
          return `const input = [${input}]; \nconsole.log(input.fill());`;
        } else {
          return `const input = [${input}]; \nconsole.log(input.fill());`;
        }
      case "filter":
        if (parameter1) {
          return `const input = [${input}]; \nconsole.log(input.filter((value)=>value > ${parameter1}));`;
        } else {
          return `const input = [${input}]; \nconsole.log(input.filter((value)=>value > ));`;
        }
      case "find":
        if (parameter1) {
          return `const input = [${input}]; \nconsole.log(input.find((value)=>value > ${parameter1}));`;
        } else {
          return `const input = [${input}]; \nconsole.log(input.find((value)=>value > ));`;
        }
      case "findIndex":
        if (parameter1) {
          return `const input = [${input}]; \nconsole.log(input.findIndex((value)=>value > ${parameter1}));`;
        } else {
          return `const input = [${input}]; \nconsole.log(input.findIndex((value)=>value > ));`;
        }
      case "findLast":
        if (parameter1) {
          return `const input = [${input}]; \nconsole.log(input.findLast((value)=>value > ${parameter1}));`;
        } else {
          return `const input = [${input}]; \nconsole.log(input.findLast((value)=>value > ));`;
        }
      case "findLastIndex":
        if (parameter1) {
          return `const input = [${input}]; \nconsole.log(input.findLastIndex((value)=>value > ${parameter1}));`;
        } else {
          return `const input = [${input}]; \nconsole.log(input.findLastIndex((value)=>value > ));`;
        }
      case "forEach":
        if (parameter1) {
          return `const input = [${input}];\ninput.forEach((element) => {\n   console.log(element * ${parameter1});\n});`;
        } else {
          return `const input = [${input}];\ninput.forEach((element) => {\n   console.log(element * );\n});`;
        }
      case "includes":
        if (!parameter2 && parameter1) {
          return `const input = [${input}]; \nconsole.log(input.includes("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = [${input}]; \nconsole.log(input.includes("${parameter2}"));`;
        } else if (parameter2 && parameter1) {
          return `const input = [${input}]; \nconsole.log(input.includes("${parameter1}","${parameter2}"));`;
        } else {
          return `const input = [${input}]; \nconsole.log(input.includes());`;
        }
      case "indexOf":
        if (!parameter2 && parameter1) {
          return `const input = [${input}]; \nconsole.log(input.indexOf("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = [${input}]; \nconsole.log(input.indexOf("${parameter2}"));`;
        } else if (parameter2 && parameter1) {
          return `const input = [${input}]; \nconsole.log(input.indexOf("${parameter1}","${parameter2}"));`;
        } else {
          return `const input = [${input}]; \nconsole.log(input.indexOf());`;
        }
      case "join":
        if (parameter1) {
          return `const input = [${input}]; \nconsole.log(input.join("${parameter1}"));`;
        } else {
          return `const input = [${input}]; \nconsole.log(input.join());`;
        }
      case "lastIndexOf":
        if (!parameter2 && parameter1) {
          return `const input = [${input}]; \nconsole.log(input.lastIndexOf("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = [${input}]; \nconsole.log(input.lastIndexOf("${parameter2}"));`;
        } else if (parameter2 && parameter1) {
          return `const input = [${input}]; \nconsole.log(input.lastIndexOf("${parameter1}","${parameter2}"));`;
        } else {
          return `const input = [${input}]; \nconsole.log(input.lastIndexOf());`;
        }
      case "map":
        if (parameter1) {
          return `const input = [${input}]; \nconsole.log(input.map((x)=>x * ${parameter1}));`;
        } else {
          return `const input = [${input}]; \nconsole.log(input.map((x)=>x * ));`;
        }
      case "pop":
        return `const input = [${input}]; \nconsole.log(input.pop());`;
      case "push":
        if (parameter1) {
          return `const input = [${input}]; \nconsole.log(input.push("${parameter1}"));`;
        } else {
          return `const input = [${input}]; \nconsole.log(input.push());`;
        }
      case "reduce":
        if (parameter1) {
          return `const input = [${input}]; \nconst initialValue = ${parameter1}; \nconst sumWithInitial = input.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);\nconsole.log(sumWithInitial);`;
        } else {
          return `const input = [${input}]; \nconst initialValue = ; \nconst sumWithInitial = input.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);\nconsole.log(sumWithInitial);`;
        }
      case "reverse":
        return `const input = [${input}]; \nconsole.log(input.reverse());`;
      case "shift":
        return `const input = [${input}]; \nconsole.log(input.shift());`;
      case "slice":
        if (!parameter2 && parameter1) {
          return `const input = [${input}]; \nconsole.log(input.slice("${parameter1}"));`;
        } else if (!parameter1 && parameter2) {
          return `const input = [${input}]; \nconsole.log(input.slice("${parameter2}"));`;
        } else if (parameter2 && parameter1) {
          return `const input = [${input}]; \nconsole.log(input.slice("${parameter1}","${parameter2}"));`;
        } else {
          return `const input = [${input}]; \nconsole.log(input.slice());`;
        }
      case "some":
        if (parameter1) {
          return `const input = [${input}]; \nconst isBelowThreshold = (currentValue) => currentValue === ${parameter1}; \nconsole.log(input.some(isBelowThreshold"));`;
        } else {
          return `const input = [${input}]; \nconst isBelowThreshold = (currentValue) => currentValue === ; \nconsole.log(input.some(isBelowThreshold));`;
        }
      case "sort":
        return `const input = [${input}]; \nconsole.log(input.sort());`;
      case "splice":
        if (parameter1 && parameter2 && parameter3) {
          return `const input = [${input}]; \nconsole.log(input.splice("${parameter1}", "${parameter2}", "${parameter3}"));`;
        } else if (parameter1 && parameter2 && !parameter3) {
          return `const input = [${input}]; \nconsole.log(input.splice("${parameter1}", "${parameter2}"));`;
        } else if (parameter1 && !parameter2 && parameter3) {
          return `const input = [${input}]; \nconsole.log(input.splice("${parameter1}", "${parameter3}"));`;
        } else if (!parameter1 && parameter2 && parameter3) {
          return `const input = [${input}]; \nconsole.log(input.splice("${parameter2}", "${parameter3}"));`;
        } else if (parameter1 && !parameter2 && !parameter3) {
          return `const input = [${input}]; \nconsole.log(input.splice("${parameter1}"));`;
        } else if (!parameter1 && parameter2 && !parameter3) {
          return `const input = [${input}]; \nconsole.log(input.splice("${parameter2}"));`;
        } else if (!parameter1 && !parameter2 && parameter3) {
          return `const input = [${input}]; \nconsole.log(input.splice("${parameter3}"));`;
        } else if (!parameter1 && !parameter2 && !parameter3) {
          return `const input = [${input}]; \nconsole.log(input.splice());`;
        } else {
          return `const input = [${input}]; \nconsole.log(input.splice());`;
        }
      case "unshift":
        return `const input = [${input}]; \nconsole.log(input.unshift());`;
    }
  } else {
    console.error("Invalid Pathname");
  }
};
