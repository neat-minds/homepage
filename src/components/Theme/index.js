import { injectGlobal } from 'styled-components';

import colors from './colors';

injectGlobal`
body {
  background: ${colors.background}
}
`;
