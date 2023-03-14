import { Typography } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ title }) => {
  return (
    <Typography.Text type="secondary" strong>
      {title}
    </Typography.Text>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object
};

export default Header;
