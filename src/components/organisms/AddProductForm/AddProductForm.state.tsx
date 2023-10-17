import { useFormik } from "formik";
import { useEffect } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { FORMIK_ERRORS as fe } from "../../../constants/errorString";
import { addYearToDate } from "../../../helpers/date";
import { BPProduct } from "../../../types/parsers/product";

export const validationSchema = z.object({
  id: z
    .string({ required_error: fe.REQUIRED })
    .min(3, fe.MIN_LENGTH(3))
    .max(10, fe.MAX_LENGTH(10)),
  name: z
    .string({ required_error: fe.REQUIRED })
    .min(5, fe.MIN_LENGTH(5))
    .max(100, fe.MAX_LENGTH(100)),
  description: z
    .string({ required_error: fe.REQUIRED })
    .min(10, fe.MIN_LENGTH(10))
    .max(200, fe.MAX_LENGTH(200)),
  logo: z.string({ required_error: fe.REQUIRED }).url(fe.URL),
  date_release: z.string({ required_error: fe.REQUIRED }),
  date_revision: z.string().datetime({ offset: true }),
});

const initialValues: BPProduct = {
  id: "",
  name: "",
  description: "",
  logo: "",
  date_release: "",
  date_revision: "",
};

export const useAddProductForm = () => {
  const {
    values,
    touched,
    errors,
    handleChange,
    resetForm,
    handleSubmit,
    submitForm,
    setFieldValue,
  } = useFormik<BPProduct>({
    initialValues,
    onSubmit: (formValues) => {
      console.log("formValues", formValues);
    },
    validationSchema: toFormikValidationSchema(validationSchema),
  });

  useEffect(() => {
    if (values.date_release) {
      setFieldValue("date_revision", addYearToDate(values.date_release));
    }
  }, [values.date_release, setFieldValue]);

  return {
    values,
    touched,
    errors,
    handleChange,
    resetForm,
    handleSubmit,
    submitForm,
  };
};
