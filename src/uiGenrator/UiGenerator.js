import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Table from './Table/Table';
import styles from './UiGenerator.module.css';
import FilterContainer from './Filter/FilterContainer';

const UiGenerator = ({
  config: {
    title,
    table: { columns, apiDetails },
    filter: { list }
  }
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerCntnr}>
        <Header title={title} />
      </div>
      <div className={styles.main}>
        <div className={styles.filterCntnr}>
          <FilterContainer list={list} />
        </div>
        <div className={styles.tableCntnr}>
          <Table columns={columns} apiDetails={apiDetails} />
        </div>
      </div>
    </div>
  );
};

UiGenerator.propTypes = {
  config: PropTypes.shape({
    title: PropTypes.string,
    table: PropTypes.shape({
      columns: PropTypes.array,
      apiDetails: PropTypes.shape({ url: PropTypes.string })
    }),
    filter: PropTypes.shape({
      list: PropTypes.array
    })
  })
};

export default UiGenerator;
