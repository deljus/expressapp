import React, { Component } from "react";
import { Grid } from "material-ui";
import { connect } from "react-redux";
import { withRouter } from 'react-router';

import { RegularCard, Table, ItemGrid } from "components";
import { INIT_TABLE_SAGA } from "core/constants";

class TableList extends Component {
  componentDidMount(){
    this.props.initRequest(this.props.table);
  }
  render() {
    const { table, storeTable, history } = this.props;

    return storeTable && (
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            cardTitle={table}
            content={
              <Table
                tableHeaderColor="primary"
                tableHead={storeTable.tableHead}
                tableData={storeTable.tableData || []}
                editItem={id => history.push(`/table/${table}/edit/${id}`)}
                deleteItem={() => null}
              />
            }
          />
        </ItemGrid>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  storeTable: state.tables[ownProps.table] || null,
});

const mapDispatchToProps = dispatch => ({
  initRequest: tableName => dispatch({ type: INIT_TABLE_SAGA, tableName })
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TableList));
