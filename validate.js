"use strict";
module.exports = validate20;
module.exports.default = validate20;
const schema22 = {
  $ref: "#/definitions/event",
  definitions: {
    event: {
      properties: { time: { $ref: "#/definitions/time" } },
      type: "object",
    },
    time: { format: "js-date-time", type: "string" },
  },
  type: "object",
};
const schema23 = {
  properties: { time: { $ref: "#/definitions/time" } },
  type: "object",
};
const schema24 = { format: "js-date-time", type: "string" };
const formats0 = {
  _items: ['require("ajv-formats/dist/formats").', { str: "fullFormats" }, ""],
}["js-date-time"];
function validate21(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      if (data.time !== undefined) {
        let data0 = data.time;
        const _errs2 = errors;
        if (errors === _errs2) {
          if (errors === _errs2) {
            if (typeof data0 === "string") {
              if (!formats0(data0)) {
                validate21.errors = [
                  {
                    instancePath: instancePath + "/time",
                    schemaPath: "#/definitions/time/format",
                    keyword: "format",
                    params: { format: "js-date-time" },
                    message: 'must match format "' + "js-date-time" + '"',
                  },
                ];
                return false;
              }
            } else {
              validate21.errors = [
                {
                  instancePath: instancePath + "/time",
                  schemaPath: "#/definitions/time/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                },
              ];
              return false;
            }
          }
        }
      }
    } else {
      validate21.errors = [
        {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        },
      ];
      return false;
    }
  }
  validate21.errors = vErrors;
  return errors === 0;
}
function validate20(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data))) {
    validate20.errors = [
      {
        instancePath,
        schemaPath: "#/type",
        keyword: "type",
        params: { type: "object" },
        message: "must be object",
      },
    ];
    return false;
  }
  if (
    !validate21(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData,
    })
  ) {
    vErrors =
      vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
    errors = vErrors.length;
  }
  validate20.errors = vErrors;
  return errors === 0;
}
