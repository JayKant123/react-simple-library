import React from 'react';
import PropTypes from 'prop-types';
import InputFilter from './InputFilter';
import SingleSelectFilter from './SingleSelectFilter';
import styles from './FilterRenderer.module.css';

const Filter = ({
  filters,
  updateFilters,
  config: { key, label, type, url = '/', options = [] }
}) => {
  switch (type) {
    case 'SingleSelect':
      return (
        <SingleSelectFilter
          value={filters?.[key] ?? null}
          label={label}
          url={url}
          options={options}
          changeCb={(val) => updateFilters(key, val)}
        />
      );

    case 'string':
      return (
        <InputFilter
          value={filters?.[key] ?? ''}
          label={label}
          changeCb={(val) => updateFilters(key, val)}
        />
      );

    default:
      break;
  }
};

Filter.propTypes = {
  filters: PropTypes.any,
  updateFilters: PropTypes.func,
  config: PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array,
    type: PropTypes.string,
    url: PropTypes.string
  })
};

const FilterRenderer = ({ filters, list, updateFilters }) => {
  return (
    <>
      {list.map((config) => (
        <div className={styles.container} key={config.key}>
          <Filter
            filters={filters}
            updateFilters={updateFilters}
            config={config}
          />
        </div>
      ))}
    </>
  );
};

FilterRenderer.propTypes = {
  filters: PropTypes.any,
  list: PropTypes.array,
  updateFilters: PropTypes.func
};

export default FilterRenderer;
