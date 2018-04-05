import React from "react";
import {
  withStyles,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Button
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
                    {column.name}
                  </TableCell>
                );
              })}
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
          {Object.keys(tableData).map((ind, key) => {
            return (
              <TableRow key={key}>
                {Object.keys(tableData[ind]).map((pr, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {tableData[ind][pr]}
                    </TableCell>
                  );
                })}
                <TableCell className={classes.tableCell} key="buttons">
                  <Button color="secondary" mini aria-label="edit" className={classes.button} onClick={() => editItem(ind)}>
                    <Edit/>
                    Edit
                  </Button>
                  <Button aria-label="delete" mini className={classes.button} onClick={() => deleteItem(ind)}>
                    <Delete />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
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
  tableData: PropTypes.arrayOf(PropTypes.object),
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default withStyles(tableStyle)(CustomTable);
