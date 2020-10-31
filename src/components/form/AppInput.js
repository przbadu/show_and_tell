import { FormControl, Input, InputLabel } from "@material-ui/core";
import React from "react";

export default function AppInput({ title, name, value, onChange }) {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={name}>{title}</InputLabel>
      <Input id={name} name={name} value={value} onChange={onChange} />
    </FormControl>
  );
}
