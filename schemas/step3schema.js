import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  checkboxes: Yup.array()
  .of(Yup.boolean())
  .min(1, 'Please select at least one goal to proceed.')
  .required('Please select at least one goal to proceed.'),
});