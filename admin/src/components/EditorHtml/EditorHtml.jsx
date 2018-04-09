import React from "react";
import { withStyles, FormControl, InputLabel } from "material-ui";
import { Clear, Check } from "material-ui-icons";
import PropTypes from "prop-types";
import cx from "classnames";
import ReactQuill from 'react-quill';
import customInputStyle from "variables/styles/customInputStyle";
import 'react-quill/dist/quill.snow.css';


const defaultSt = {modules: {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
},

formats: [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
]};


function EditorHtml({ ...props }) {
  const {
    classes,
    formControlProps,
    labelText,
    id,
    labelProps,
    editorProps,
    error,
    success,
    onChange,
    value,
  } = props;

  const labelClasses = cx({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const inkbarClasses = cx({
    [classes.inkbarError]: error,
    [classes.inkbarSuccess]: success && !error,
    [classes.inkbar]: !success && !error
  });
  const marginTop = cx({
    [classes.marginTop]: labelText === undefined
  });
  return (
    <FormControl
      {...formControlProps}
      className={formControlProps.className + " " + classes.formControl}
    >
      {labelText}
      <ReactQuill
        // classes={{
        //   root: marginTop,
        //   disabled: classes.disabled,
        //   underline: classes.underline,
        //   ...inkbarClasses,
        // }}
        {...editorProps}
        {...defaultSt}
      />
      {error ? (
        <Clear className={classes.feedback + " " + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + " " + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
  );
}

EditorHtml.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool
};

export default withStyles(customInputStyle)(EditorHtml);
