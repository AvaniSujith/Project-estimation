export const validateString = (
  label: string,
  minLength: number,
  maxLength: number
) => [
  (value: string) => !!value || "Input field needs to be filled",
  (value: string) =>
    value.length >= minLength ||
    `${label} needs to be atleast contain ${minLength} characters`,
  (value: string) =>
    value.length <= maxLength ||
    `${label} should only contain ${maxLength} characters`,
];
