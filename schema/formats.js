// eslint-disable-next-line @typescript-eslint/no-var-requires
const addFormats = require("ajv-formats");

function enableFormats(ajv) {
  // Add the default AJV formats
  addFormats(ajv);

  // handle date-time format specially because a user could pass
  // Date().toString(), which is not spec compliant date-time format
  ajv.addFormat("js-date-time", function formatJSDate(dateTimeString) {
    const date = new Date(Date.parse(dateTimeString));
    return date.toString() !== "Invalid Date";
  });
}

module.exports = enableFormats;
