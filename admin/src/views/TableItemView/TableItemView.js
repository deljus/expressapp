import React from "react";
import { Field, reduxForm } from 'redux-form'
import { Grid, InputLabel } from "material-ui";
import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";


import { connect } from "react-redux";
import FieldsType from "./FieldsType";
import asyncValidate from './asyncValidate';

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
      <Grid container>
      { columns.map((column, key) => (
        <div key={key} >
          <Field name={column.name} component={FieldsType['STRING']} label={column.name} />
        </div>
      ))}
      <div>
        <Button color="primary"  type="submit" disabled={pristine || submitting}>Submit</Button>
        <Button color="primary"  type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
      </div>
      </Grid>
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
