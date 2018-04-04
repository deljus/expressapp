import React from "react";
import { connect } from "react-redux";
import { Error } from "material-ui-icons";
import { Snackbar } from "components";
import { succsessRequest } from "core/action"

const ErrorCnackBar = ({ error, errorText, cancel }) => (
  <Snackbar
    place="tc"
    color="danger"
    icon={Error}
    message={errorText}
    open={error}
    closeNotification={cancel}
    close
  />
);

const mapStateToProps = state => ({
  error: state.request.error,
  errorText: state.request.errorText,
});

const mapDispatchToProps = dispatch => ({
  cancel: () => dispatch(succsessRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorCnackBar);
