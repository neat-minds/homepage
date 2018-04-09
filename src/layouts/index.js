import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'normalize.css';

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
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
