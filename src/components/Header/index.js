import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
  padding: 1em 0;
`;

Header.propTypes = {
  children: PropTypes.element
};

export default ({ children }) => <Header>{children}</Header>;
