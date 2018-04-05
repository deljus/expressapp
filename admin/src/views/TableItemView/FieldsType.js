import React, { Component } from "react";
import { TextField } from "material-ui";
import { DatePicker } from 'material-ui-pickers';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  ProfileCard,
  RegularCard,
  Button,
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

const EditorFieldComp = () => (
  <ItemGrid xs={12} sm={12} md={12}>
    <Editor
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
      toolbarClassName="demo-class"
    />
  </ItemGrid>
)

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
  "DATE": DataFieldComp,
  "TEXT": EditorFieldComp,
};

export default FieldTypes;