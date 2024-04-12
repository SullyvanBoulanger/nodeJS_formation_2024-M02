const { body, param, validationResult } = require("express-validator");

const errorMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  next();
};

const pathIdValidator = [
  param("id", "Id is required").not().isEmpty(),
  param("id", "Id must be an integer").isInt(),
];

const postTaskValidator = [
  body("title", "Title is required").not().isEmpty(),
  body("title", "Title must be a string").isString(),
  body("description", "Description must be a string").isString(),
  body(["date_debut", "date_fin"], "Dates must be a string format dd/mm/yyyy")
    .isString()
    .matches(
      /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/
    ),
  body("done", "Done must be boolean").isBoolean(),
];

const [_, ...rest] = postTaskValidator;

const putTaskValidator = rest.map((validator) => validator.optional());

module.exports = {
  pathIdValidator,
  postTaskValidator,
  putTaskValidator,
  errorMiddleware,
};
