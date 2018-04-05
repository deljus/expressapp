import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { Grid } from "material-ui";
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


class TableItem extends Component {

  componentDidMount(){
    const { columns, initEditPage, initCreatePage, match } = this.props;
    const id = match.params.id;
    if(!columns && id){
      initEditPage(id)
    } else if(!columns && !id){
      initCreatePage()
    }else{

    }
  }
  render(){

  const { handleSubmit, pristine, reset, submitting, columns } = this.props;

  return (
    <form onSubmit={handleSubmit(asyncValidate)}>
      <RegularCard
        cardTitle="Edit Profile"
        cardSubtitle="Complete your profile"
        content={
          <Grid container>
            {columns && columns.map((column, key) => (
              <Field name={column.name} component={FieldsType[column.type]} label={column.name}/>
            ))}
            <ItemGrid xs={12} sm={12} md={12}>
              <Button color="primary" type="submit" disabled={pristine || submitting}>Submit</Button>
              <Button color="primary" type="button" disabled={pristine || submitting} onClick={reset}>Clear
                Values</Button>
            </ItemGrid>
          </Grid>
        }/>
    </form>
  )
}
};

const TableItemView = reduxForm({
  form: 'UiForm',
  validate
})(TableItem);



const mapStateToProps = (state, ownProps) => {
  const tableName = ownProps.match.params.tableName;
  const id = ownProps.match.params.id;
  const table = state.tables[tableName];
  return {
    columns: table && table.columns,
    data: table && table.data && table.data[id]
  }
};

const mapDispatchToProps = dispatch => ({
  initEditPage: () => dispatch({ type: '' }),
  initCreatePage: () => dispatch({ type: '' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableItemView);
