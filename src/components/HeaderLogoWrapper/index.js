import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

HeaderLogoWrapper.PropTypes = {
  children: PropTypes.element
};

export default ({ children }) => (
  <HeaderLogoWrapper>{children}</HeaderLogoWrapper>
);
