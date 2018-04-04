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


const TextFieldComp = ({ input, label, meta: { touched, error }, ...custom }) => (
  <ItemGrid xs={12} sm={12} md={6}>
    <CustomInput
               formControlProps={{
                 fullWidth: true
               }}
               inputProps={{
                 label,
                 error,
                 input,
                 custom
               }}
    />
  </ItemGrid>
)

const EditorFieldComp = () => (
  <Editor
    wrapperClassName="demo-wrapper"
    editorClassName="demo-editor"
  />
)

const DataFieldComp = () => (
  <div></div>
);

const FieldTypes = {
  "STRING" : TextFieldComp,
  "INTEGER": TextFieldComp,
  "DATA": DataFieldComp,
  "TEXT": EditorFieldComp,
};

export default FieldTypes;