const validate = require("./validate")

if (!validate({ time: new Date().toString() })) {
  console.log(validate.errors)
}
