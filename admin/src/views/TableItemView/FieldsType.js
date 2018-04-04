import React, { Component } from "react";
import { TextField } from "material-ui";
import { DatePicker } from 'material-ui-pickers';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextFieldComp = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
             floatingLabelText={label}
             errorText={touched && error}
             {...input}
             {...custom}
  />
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

export default FieldTypes