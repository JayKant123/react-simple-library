import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import styles from './Filter.module.css';

const InputFilter = ({ value, label, changeCb }) => {
  const handleChange = (e) => {
    changeCb(e.target.value);
  };

  return (
    <div className={styles.container}>
      <strong>{label}</strong>
      <Input
        style={{ width: '100%' }}
        placeholder={`Type ${label}`}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

InputFilter.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  changeCb: PropTypes.func
};

export default InputFilter;
