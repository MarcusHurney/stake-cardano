// @flow
import React from 'react';
import type { ComponentType, Ref } from 'react';
import { ThemeContext } from './ThemeContext';
import { getDisplayName } from '../../utils/props';

export type ThemeContextProp = {
  skins: Object,
  theme: Object,
  ROOT_THEME_API: Object
};

export const createEmptyContext = (): ThemeContextProp => ({
  skins: {},
  theme: {},
  ROOT_THEME_API: {}
});

// withTheme is a HOC that takes a Component as a parameter
// and returns that Component wrapped within ThemeContext.Consumer.
// Any additional props and refs are forwarded to the returned Component.
export function withTheme<C: ComponentType<any>>(Component: C): C {
  // wraps component in context AND forwardRef
  const WrappedComponent = React.forwardRef((props: {}, ref: Ref<any>) => (
    <ThemeContext.Consumer>
      {context => <Component context={context} ref={ref} {...props} />}
    </ThemeContext.Consumer>
  ));
  // create a new displayName for the wrapped component
  WrappedComponent.displayName = `withTheme(${getDisplayName(Component)})`;
  // Cast type to our desired custom component
  return ((WrappedComponent: any): C);
}
