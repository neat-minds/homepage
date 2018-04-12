import Typography from 'typography';
import altonTheme from 'typography-theme-alton';
import Color from 'color';
import { colorScheme } from '~/components/Theme';

altonTheme.overrideThemeStyles = (props, options) => ({
  a: {
    color: colorScheme.princessPerfume
  },
  'a:hover, a:active': {
    color: Color(colorScheme.princessPerfume)
      .darken(0.5)
      .string()
  }
});

const typography = new Typography(altonTheme);

export default typography;
