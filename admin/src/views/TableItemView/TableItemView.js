import React, { Component } from "react";
import { Grid, InputLabel } from "material-ui";
import { Field, reduxForm } from 'redux-form'

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";


import { TextField } from "material-ui";
import { connect } from "react-redux";

import { DatePicker } from 'material-ui-pickers';
import asyncValidate from './asyncValidate';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const validate = values => {
  const errors = {}
  const requiredFields = [ 'firstName', 'lastName', 'email', 'favoriteColor', 'notes' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}


const TableItem = props => {
  const { handleSubmit, pristine, reset, submitting, columns } = props;
  return (
    <form onSubmit={handleSubmit(asyncValidate)}>
      { columns.map(column => (
        <div>
          <Field name={column.name} component={null} label="First Name"/>
        </div>
      ))}
      <div>
        <div>
          <Field name="srtsb" component={null}/>
        </div>
        <Button color="primary"  type="submit" disabled={pristine || submitting}>Submit</Button>
        <Button color="primary"  type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
      </div>
    </form>
  )
};

const TableItemView = reduxForm({
  form: 'UiForm',
  validate
})(TableItem);

const mapStateToProps = (state, ownProps) => {
  const tableName = ownProps.match.params.tableName;
  return {
    columns: state.tables[tableName].columns,
  }
};

export default connect(mapStateToProps)(TableItemView);
