import { FormikHelpers, useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { FORMIK_ERRORS as FE } from "../../../constants/errorString";
import { addYearToDate, isTodayOrLater } from "../../../helpers/date";
import { isIdAvailable } from "../../../helpers/isIdAvailable";
import { useProductsContext } from "../../../hooks/useProducts";
import { paths } from "../../../routes/paths";
import { createProduct } from "../../../services/product";
import { BPProduct } from "../../../types/parsers/product";

export const validationSchema = z.object({
  id: z
    .string({ required_error: FE.REQUIRED })
    .min(3, FE.MIN_LENGTH(3))
    .max(10, FE.MAX_LENGTH(10))
    .refine(isIdAvailable, FE.UNIQUE_ID),
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
  date_revision: z.string({ required_error: FE.REQUIRED }),
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
  const navigate = useNavigate();
  const { addProduct } = useProductsContext();

  const onSubmit = async (
    formValues: BPProduct,
    actions: FormikHelpers<BPProduct>
  ) => {
    const { status, data } = await createProduct(formValues);

    if (status === 200 && data) {
      addProduct(data);
      actions.resetForm();
      navigate(paths.root);
    }

    actions.setSubmitting(false);
  };

  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    resetForm,
    handleSubmit,
    submitForm,
    setFieldValue,
  } = useFormik<BPProduct>({
    initialValues,
    onSubmit,
    validationSchema: toFormikValidationSchema(validationSchema),
    validateOnChange: false,
    validateOnBlur: true,
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
    isSubmitting,
    handleChange,
    resetForm,
    handleSubmit,
    submitForm,
  };
};
