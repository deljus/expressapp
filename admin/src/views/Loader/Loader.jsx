import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function LinearIndeterminate(props) {
  const { classes, loading } = props;
  return (
    <div className={classes.root}>
      {loading && <LinearProgress color="secondary" />}
    </div>
  );
}

LinearIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  loading: state.request.loading,
});

export default connect(mapStateToProps)(withStyles(styles)(LinearIndeterminate));