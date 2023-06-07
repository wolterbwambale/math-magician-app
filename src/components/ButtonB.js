import React from 'react';
import PropTypes from 'prop-types';

const BtnBox = ({ children }) => (
  <div className="btnbox">{children}</div>
);

BtnBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BtnBox;
