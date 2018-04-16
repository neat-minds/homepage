import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from './happy-brain-text-logo.svg';

Logo.PropTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

Logo.defaultProps = {
  width: 'auto',
  height: 'auto'
};

export default ({ width, height }) => <Logo width={width} height={height} />;
