# Illustration of a problem I'm having with Ajv

I'd like to precompile my validation functions, and also use some custom formatters. This project includes some code illustrating a problem I am having.

My schema in `schema/schema.json` is simple. There is a single `time` field with a format of `js-date-time`. The format validation code is in `schema/formats.js`.

I generate the validation function with the command `ajv compile -c ./schema/formats.js -s ./schema/schema.json -o ./schema/validate.js`, which can also be run via `npm run build` for convenience.

The code that uses this validation function is in `app.js` and simply attempts to validate an object with what should be a valid value. When I call `validate()`, however, I get an error.

```
TypeError: formats0 is not a function
```

If you look at the prettified JavaScript generated for the validation function, it's easy to see that, in fact, `formats0` is _not_ a function.

```
const formats0 = {
  _items: ['require("ajv-formats/dist/formats").', { str: "fullFormats" }, ""],
}["js-date-time"];
```

I'm not sure what I am doing wrong here. Any guidance is appreciated.

