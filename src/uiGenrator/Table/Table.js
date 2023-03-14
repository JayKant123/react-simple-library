import React from "react";
import PropTypes from "prop-types";
import TableComponent from "./TableComponent";

const Table = ({ columns = [], apiDetails }) => {
  return (
    // <TableProvider>
    <TableComponent columns={columns} apiDetails={apiDetails} />
    // </TableProvider>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string || PropTypes.node,
      dataIndex: PropTypes.string || PropTypes.arrayOf(PropTypes.string)
    })
  ),
  apiDetails: PropTypes.shape({
    url: PropTypes.string,
    method: PropTypes.string
  })
};

export default Table;
