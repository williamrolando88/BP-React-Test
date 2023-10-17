import { useFormik } from "formik";
import { useEffect } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { FORMIK_ERRORS as FE } from "../../../constants/errorString";
import { addYearToDate, isTodayOrLater } from "../../../helpers/date";
import { isIdAvailable } from "../../../helpers/isIdAvailable";
import { BPProduct } from "../../../types/parsers/product";

export const validationSchema = z.object({
  id: z
    .string({ required_error: FE.REQUIRED })
    .min(3, FE.MIN_LENGTH(3))
    .max(10, FE.MAX_LENGTH(10)),
  name: z
    .string({ required_error: FE.REQUIRED })
    .min(5, FE.MIN_LENGTH(5))
    .max(100, FE.MAX_LENGTH(100)),
  description: z
    .string({ required_error: FE.REQUIRED })
    .min(10, FE.MIN_LENGTH(10))
    .max(200, FE.MAX_LENGTH(200)),
  logo: z.string({ required_error: FE.REQUIRED }).url(FE.URL),
  date_release: z
    .string({ required_error: FE.REQUIRED })
    .refine(isTodayOrLater, FE.DATE),
  date_revision: z.string({ required_error: FE.REQUIRED }).datetime(),
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
    setErrors,
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

  const validateId = async () => {
    if (values.id && !(await isIdAvailable(values.id))) {
      setErrors({ id: FE.UNIQUE_ID });
    }
  };

  return {
    values,
    touched,
    errors,
    handleChange,
    resetForm,
    handleSubmit,
    submitForm,
    validateId,
  };
};
