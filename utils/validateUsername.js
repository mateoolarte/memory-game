export function validateUsername(value, options) {
  const { errors, update } = options;

  if (value.length >= 20) {
    update({
      ...errors,
      username: "The username is too long",
    });
  } else {
    update({
      ...errors,
      username: "",
    });
  }

  if (value.length === 0) {
    update({
      ...errors,
      username: "This field cannot be empty",
    });
  }
}
