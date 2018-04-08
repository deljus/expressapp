import React, { Component } from "react";
import { Grid } from "material-ui";
import { connect } from "react-redux";
import history from 'core/history'
import { RegularCard, Table, ItemGrid, Button } from "components";
import {
  INIT_TABLE_SAGA,
  DELETE_TABLE_ITEM_SAGA
} from "core/constants";

class TableList extends Component {
  componentDidMount(){
    this.props.initRequest(this.props.table);
  }
  render() {
    const { table, storeTable, deleteTableItem } = this.props;

    console.log(storeTable);

    return storeTable && (
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>

          <RegularCard
            cardTitle={table}
            content={
            <div>
            <Button color="primary" onClick={() => history.push(`/table/${table}/create`)}>
              Create
            </Button>
              <Table
                tableHeaderColor="primary"
                tableHead={storeTable.columns}
                tableData={storeTable.data}
                editItem={id => history.push(`/table/${table}/edit/${id}`)}
                deleteItem={id => deleteTableItem(table, id)}
              />
            </div>
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
  initRequest: tableName => dispatch({ type: INIT_TABLE_SAGA, tableName }),
  deleteTableItem: (tableName, id) => dispatch({ type: DELETE_TABLE_ITEM_SAGA, tableName, id})
});

export default connect(mapStateToProps, mapDispatchToProps)(TableList);
