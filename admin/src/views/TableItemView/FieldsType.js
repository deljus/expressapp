import React, { Component } from "react";
import { TextField } from "material-ui";
import { DatePicker } from 'material-ui-pickers';
import {
  ProfileCard,
  RegularCard,
  Button,
  EditorHtml,
  CustomInput,
  ItemGrid
} from "components";

const TextFieldComp = ({ input, label, meta: { error }, ...custom }) => (
  <ItemGrid xs={12} sm={12} md={6}>
    <CustomInput
      id={label}
      formControlProps={{ fullWidth: true }}
      labelText={label}
      inputProps={input}
      error={error}
    />
  </ItemGrid>
);

const IntFieldComp = ({ input, label, meta: { error }, ...custom }) => (
  <ItemGrid xs={12} sm={12} md={6}>
    <CustomInput
      id={label}
      formControlProps={{ fullWidth: true }}
      labelText={label}
      inputProps={{ type: 'number', ...input }}
      error={error}
    />
  </ItemGrid>
);

const EditorFieldComp = ({ input, label, meta: { error }, ...custom }) => {
  const {value, onChange} = input;
  return(
      <EditorHtml
        formControlProps={{ fullWidth: true }}
        editorProps={{value, onChange}}
        labelText={label}
      />
  )
};

const DataFieldComp = ({ input, label, meta: { error }, ...custom }) => (
  <ItemGrid xs={12} sm={12} md={6}>
    <DatePicker

      label={label}
      clearable
      disableFuture
      maxDateMessage="Date must be less than today"
      animateYearScrolling={false}
      {...input}
    />
  </ItemGrid>
);

const FieldTypes = {
  "STRING" : TextFieldComp,
  "INTEGER": IntFieldComp,
  "DATE": TextFieldComp,
  "TEXT": EditorFieldComp,
};

export default FieldTypes;