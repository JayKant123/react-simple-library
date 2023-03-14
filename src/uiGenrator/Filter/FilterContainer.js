import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import styles from './FilterContainer.module.css';
import FilterRenderer from './FilterRenderer';

const FilterContainer = ({ list }) => {
  const [filters, setFilters] = useState({});

  const resetFilter = () => setFilters({});

  const updateFilters = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const onSearch = () => {
    console.log(filters);
  };

  return (
    <div className={styles.sidebar}>
      <h1 className={styles.filterTitle}>Filters</h1>
      <div className={styles.filters}>
        <FilterRenderer
          filters={filters}
          list={list}
          updateFilters={updateFilters}
        />
      </div>
      <div className={styles.filterBtnContainer}>
        <Button type="link" onClick={resetFilter}>
          CLEAR FILTERS
        </Button>
        <Button type="primary" onClick={onSearch}>
          SEARCH
        </Button>
      </div>
    </div>
  );
};

FilterContainer.propTypes = { list: PropTypes.array };

export default FilterContainer;
