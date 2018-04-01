import React, { Component } from "react";
import { Grid } from "material-ui";
import { connect } from "react-redux";

import { RegularCard, Table, ItemGrid } from "components";
import { INIT_TABLE_SAGA } from "core/constants";

class TableList extends Component {
  componentDidMount(){

  }
  render() {
    const { table, storeTable } = this.props;
    return storeTable && (
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            cardTitle={table}
            content={
              <Table
                tableHeaderColor="primary"
                tableHead={storeTable.tableHead}
                tableData={storeTable.tableData}
              />
            }
          />
        </ItemGrid>
      </Grid>
    );
  }
}

const mapStateToProps = (state, props) => ({
  storeTable: state.storeTable[props.table],
});

const mapDispatchToProps = dispatch => ({
  initRequest: tableName => dispatch({ type: INIT_TABLE_SAGA, tableName })
});

export default connect(mapStateToProps, mapDispatchToProps)(TableList);
