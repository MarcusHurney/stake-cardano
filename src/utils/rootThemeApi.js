// @flow
import { IDENTIFIERS } from './constants';

export const GRID_THEME_API = {
  container: '',
  item: ''
};

export const GUTTER_THEME_API = {
  gutter: ''
};

export const HEADER_THEME_API = {
  header: '',
  h1: '',
  h2: '',
  h3: '',
  h4: '',
  thin: '',
  light: '',
  regular: '',
  medium: '',
  bold: ''
};



export const ROOT_THEME_API = {
  [IDENTIFIERS.GRID]: GRID_THEME_API,
  [IDENTIFIERS.GUTTER]: GUTTER_THEME_API,
  [IDENTIFIERS.HEADER]: HEADER_THEME_API,
};
