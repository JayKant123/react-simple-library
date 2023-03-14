import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../Hooks/useFetch';
import { Select } from 'antd';
import styles from './Filter.module.css';

const SingleSelectFilter = ({ label, url, changeCb }) => {
  const [selectedOption, setselectedOption] = useState(null);
  const { fetchData, list } = useFetch();

  useEffect(() => {
    fetchData({ url });
  }, []);

  const handleSelection = (_, selectedValue) => {
    setselectedOption(selectedValue);
    changeCb(selectedValue.value);
  };

  return (
    <div className={styles.container}>
      <strong>{label}</strong>
      <Select
        showArrow
        showSearch
        style={{ width: '100%' }}
        placeholder={`Select ${label}`}
        options={list}
        defaultValue={selectedOption}
        onChange={handleSelection}
      />
    </div>
  );
};

SingleSelectFilter.propTypes = {
  filterName: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string,
  changeCb: PropTypes.func
};

export default SingleSelectFilter;
