import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { withStyles } from "material-ui";
import { connect } from "react-redux";
import * as Components from 'views';
import * as icons from 'material-ui-icons';
import { Header, Footer, Sidebar } from "components";

// import appRoutes from "routes/app.jsx";

import appStyle from "variables/styles/appStyle.jsx";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";

import { GET_ASSOCIATION_TABLE_SAGA } from "core/constants";

const switchRoutes = appRoutes => (
  <Switch>
    {appRoutes.map((prop, key, i) => {
      if (i >= appRoutes.length)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} render={() => <prop.component table={prop.table} /> } key={key} />;
    })}
    <Route path="/table/:tableName/edit/:id" component={Components.TableItemView} />
    <Route path="/table/:tableName/create" component={Components.TableItemView} />
  </Switch>
);

class App extends React.Component {
  state = {
    mobileOpen: false
  };
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/maps";
  }
  componentDidMount() {
    if(navigator.platform.indexOf('Win') > -1){
      // eslint-disable-next-line
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    this.props.initRequest();
  }
  componentDidUpdate() {
    this.refs.mainPanel.scrollTop = 0;
  }
  render() {
    const { classes, appRoutes, ...rest } = this.props;

    const appRoutes1 = appRoutes.map(a => { return {  ...a, icon: icons[a.icon], component: Components[a.component]}});

    return (
      <div className={classes.wrapper}>

        <Sidebar
          routes={appRoutes1}
          logoText={"Creative Tim"}
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="orange"
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Components.Loader />
          <Components.ErrorSnackBar />
          <Header
            routes={appRoutes1}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes(appRoutes1)}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes(appRoutes1)}</div>
          )}
          {this.getRoute() ? <Footer /> : null}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  appRoutes: state.appRoutes,
});

const mapDispatchToProps = dispatch => ({
  initRequest: () => dispatch({ type: GET_ASSOCIATION_TABLE_SAGA })
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(appStyle)(App));
