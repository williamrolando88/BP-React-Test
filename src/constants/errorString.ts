export const FORMIK_ERRORS = {
  REQUIRED: "Este campo es requerido!",
  MIN_LENGTH: (min: number) => `Requerido, mínimo ${min} caracteres`,
  MAX_LENGTH: (min: number) => `Requerido, máximo ${min} caracteres`,
  URL: "Requerido, debe ser una URL válida",
  DATE: "Requerido, la fecha debe ser igual o mayor a la fecha actual",
  UNIQUE_ID: "ID no válido",
};
