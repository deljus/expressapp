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


const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
             floatingLabelText={label}
             errorText={touched && error}
             {...input}
             {...custom}
  />
)

const renderTextEditor = () => (
  <FroalaEditor tag='textarea'  />
)

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
  const { handleSubmit, pristine, reset, submitting, tableHead } = props;
  return (
    <form onSubmit={handleSubmit(asyncValidate)}>
      { tableHead.map(column => (
        <div>
          <Field name={column} component={renderTextField} label="First Name"/>
        </div>
      ))}
      <div>
        <div>
          <Field name="srtsb" component={renderTextEditor}/>
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
    tableColumns: state.tables[tableName].columnsType,
    tableHead: state.tables[tableName].tableHead,
  }
};

export default connect(mapStateToProps)(TableItemView);
