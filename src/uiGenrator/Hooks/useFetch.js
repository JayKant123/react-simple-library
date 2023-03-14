import axios from 'axios';
import { useState } from 'react';

const useFetch = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, seterror] = useState(null);

  // react axios get method
  const fetchData = ({
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
        setList(data);
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

  return { list, isLoading, error, fetchData };
};

export default useFetch;
