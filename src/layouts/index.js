import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '~/components/Header';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Neat Minds"
      meta={[
        {
          name: 'description',
          content:
            'Neat Minds is specialized in creating fast, responsive and user friendly web products. Emphasis is put on clean code, agile methodologies and fun.'
        },
        {
          name: 'keywords',
          content:
            'web development, software development, front end, front-end, frontend, agile, lean, kanban, HTML5, Javascript, CSS, TDD'
        }
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
