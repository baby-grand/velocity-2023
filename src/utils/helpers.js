// CONVERT PX TO REM
function pxToRem(px) {
  return px / 16 + "rem"
}
// CALCULATE PERCENTAGE
function calculatePercentage(container, item) {
  return (item / container) * 100
}
// CONVERT KEBOB CASE TO CAMEL CASE
function kebobToCamelCase(kebobCase) {
  let camelCase = kebobCase.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase()
  })
  return camelCase
}
// CREATE CLASS NAME
// 1. replace spaces with dashes
// 2. convert to lowercase
// 3. remove any special characters
function createClassName(className, caseStyle = "camel") {
  className = className.replace(/\s+/g, "-").toLowerCase()
  className = className.replace(/[^a-zA-Z0-9-]/g, "")
  if (caseStyle === "camel") {
    className = kebobToCamelCase(className)
  }
  return className
}

// CONVERT AN HTML LIST INTO AN ARRAY OF OBJECTS,
// 1. split by the <li> tag
// 2. remove any left over HTML tags
// 3. split the string into an array of strings
// 4. create an object with an incremental number for the key and the string as the value
// 5. return the array of objects
function convertHtmlListToArray(htmlList) {
  let listArray = []
  // remove whitespace between <li> tags
  htmlList = htmlList.replace(/>\s+</g, "><")
  // split by <li> tag
  listArray = htmlList.split("<li>")
  // remove the first item in the array, which is an empty string
  listArray.shift()
  // remove any left over HTML tags
  listArray = listArray.map((item) => {
    item = item.replace(/<\/?[^>]+(>|$)/g, "")
    return item
  })
  // split the string into an array
  listArray = listArray.map((item, index) => {
    return {
      [index]: item
    }
  })
  return listArray
}
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
function removeDoubleLineBreaks (text) {
  text = text.replace(/\n\n/g, "\n")
  return text
}


function wrapStringsWithTags(
  src = "No source content",
  tag = "strong",
  str = [],
  parse = "html"
) {
  str.forEach((s) => {
    if (parse === "markdown") {
      if (tag === "strong") src = src.replace(s, `**${s}**`);
      if (tag === "h1") src = src.replace(s, `# ${s}`);
      if (tag === "h2") src = src.replace(s, `## ${s}`);
      if (tag === "h3") src = src.replace(s, `### ${s}`);
      if (tag === "h4") src = src.replace(s, `#### ${s}`);
      if (tag === "h5") src = src.replace(s, `##### ${s}`);
      if (tag === "h6") src = src.replace(s, `###### ${s}`);
      if (tag === "p") src = src.replace(s, `${s}\n\n`);
    } else {
      src = src.replace(s, `<${tag}>${s}</${tag}>`);
    }
  });
  return src.replace(`\n\n`, "<br><br>");
}

const contentPadding = {
  pr: {
    xs: 5,
    sm: 8,
    md: 8,
    lg: 11,
    xl: 12,
  },
  pl: {
    xs: 2,
    sm: 3,
    md: 8,
    lg: 6,
    xl: 12,
  }
};

export { convertHtmlListToArray, pxToRem, calculatePercentage, createClassName, kebobToCamelCase, randomNumber, removeDoubleLineBreaks, contentPadding, wrapStringsWithTags }