export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    const formattedErrors = result.error.issues.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));

    return res.status(400).json({
      message: "Validation error",
      errors: formattedErrors,
    });
  }

  req.body = result.data;
  next();
};
