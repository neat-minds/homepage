module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        icon: true,
        viewBox: false
        // see https://github.com/smooth-code/svgr for a list of all options
      }
    }
  ]
};
