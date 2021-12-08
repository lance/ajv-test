const validate = require("./schema/validate")

if (!validate({ time: new Date().toString() })) {
  console.log(validate.errors)
}
