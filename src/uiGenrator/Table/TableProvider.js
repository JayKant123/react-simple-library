import React, { createContext, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [pagiantionData, setPaginationData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, seterror] = useState(null);

  // react axios get method
  const fetchData = async ({
    url = '',
    method = 'GET',
    data = null,
    headers = {},
    responseType = 'json'
  }) => {
    setIsLoading(true);
    const dataOrParams = ['GET'].includes(method) ? 'params' : 'data';

    axios
      .request({
        url,
        method,
        headers: { ...headers, 'Content-Type': 'application/json' },
        responseType,
        [dataOrParams]: data
      })
      .then(({ data }) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);

        if (error.response && [401, 403].includes(error.response.status)) {
          console.log('unauthorize access');
        } else {
          seterror(error.response);
        }
      });
  };

  return (
    <TableContext.Provider
      value={{
        data,
        isLoading,
        error,
        fetchData
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

TableProvider.propTypes = {
  children: PropTypes.node
};

export default TableContext;
