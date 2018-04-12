import { injectGlobal } from 'styled-components';

export * from './colors';
import { colorScheme } from './colors';

injectGlobal`
body {
  background: ${colorScheme.concrete}
}
`;
