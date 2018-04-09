import React from "react";
import {
  withStyles,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TablePagination,
  Button,
  Tooltip,
  TableSortLabel,
} from "material-ui";

import {
  Edit,
  Delete
} from 'material-ui-icons';

import PropTypes from "prop-types";

import tableStyle from "variables/styles/tableStyle";

function CustomTable({ ...props }) {
  const { classes, tableHead, tableData, tableHeaderColor, editItem, deleteItem } = props;

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow>
              {tableHead.map((column, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    <Tooltip
                      title="Sort"
                      placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                      enterDelay={300}
                    >
                      <TableSortLabel
                        active={true}

                        onClick={()=> null}
                      >
                        {column.name}
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                )
              })
              }
              <TableCell
                className={classes.tableCell + " " + classes.tableHeadCell}
                key="actions"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((item, key) => {
            return (
              <TableRow key={key}>
                {Object.keys(item).map((elem, inx) => {
                  return (
                    <TableCell className={classes.tableCell} key={inx}>
                      {item[elem]}
                    </TableCell>
                  );
                })}
                <TableCell className={classes.tableCell} key="buttons">
                  <Button color="secondary" mini aria-label="edit" className={classes.button} onClick={() => editItem(item['id'])}>
                    <Edit/>
                    Edit
                  </Button>
                  <Button aria-label="delete" mini className={classes.button} onClick={() => deleteItem(item['id'])}>
                    <Delete />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={Object.keys(tableData).length}
        rowsPerPage={1}
        page={1}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={()=> null}
        onChangeRowsPerPage={() => null}
      />
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.object),
  tableData: PropTypes.objectOf(PropTypes.object),
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default withStyles(tableStyle)(CustomTable);
