import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table as AntdTable } from 'antd';
import TableContext from './TableProvider';
import { renderer } from './TableHelper';
import useFetch from '../Hooks/useFetch';

const { Column } = AntdTable;

const TableComponent = ({ columns = [], apiDetails: { url } }) => {
  const { fetchData, list, isLoading } = useFetch();

  useEffect(() => {
    fetchData({ url });
  }, []);

  const changePaginationHandler = () => {
    fetchData({ url });
  };

  return (
    <AntdTable
      loading={isLoading}
      dataSource={list.payload}
      pagination={false}
      // onChange={(pr, fl, sr) => console.log(pr, fl, sr)}
      // pagination={{
      //   total: 120,
      //   showTotal: (prop, r) => {
      //     return `total ${prop}`;
      //   },
      //   onChange: changePaginationHandler,
      //   showSizeChanger: false
      // }}
      size="small"
      scroll={{ x: 'max-content' }}
      style={{ height: '200px', overflowY: 'auto' }}
    >
      {columns.map(({ title, dataIndex, key, type = 'default', width }) => (
        <Column
          key={key}
          title={title}
          dataIndex={dataIndex}
          width={width}
          render={(text) => renderer(type, text)}
        />
      ))}
    </AntdTable>
  );
};

TableComponent.propTypes = {
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

export default TableComponent;
