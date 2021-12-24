import React from "react";
import {
  Group,
  FormInputLabel,
  ShrinkLabel,
  FormInputContainer,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <Group>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      otherProps.value.length ? (
        <ShrinkLabel>{label}</ShrinkLabel>
      ) : (
        <FormInputLabel>{label}</FormInputLabel>
      )
    ) : null}
  </Group>
);

export default FormInput;
