const path = require('path');

exports.modifyWebpackConfig = ({ config, _stage }) => {
  return config.merge({
    resolve: {
      alias: {
        '~': path.resolve(config._config.context, 'src')
      }
    }
  });
};
