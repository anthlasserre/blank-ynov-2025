import { createTheme, useTheme as useRestyleTheme } from '@shopify/restyle';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

const palette = {
  // Theme
  foundationGreyLighter: '#A2A2A2',
  foundationBrownNormal: '#C67C4E',
  foundationSurfaceNormal: '#D8D8D8',

  gray: '#808080',
  blue: '#007AFF',
  darkGray: '#38434D',
  white: '#FFFFFF',
  black: '#000000',
  purple: '#6366F1',

  red: '#ED5151',
};

const theme = createTheme({
  colors: {
    ...palette,
  },
  spacing: {
    xs_4: 4,
    xs_6: 6,
    s_8: 8,
    sm_12: 12,
    m_16: 16,
    ml_24: 24,
    l_32: 32,
    xl_64: 64,
  },
  borderRadii: {
    s_3: 3,
    m_6: 6,
    l_8: 8,
    l_12: 12,
    ml_16: 16,
    xl_24: 24,
    full: 9999,
  },
  textVariants: {
    body: {
      fontFamily: 'Sora-Regular',
      fontSize: 18,
    },
    bodyBold: {
      fontFamily: 'Sora-SemiBold',
      fontSize: 18,
    },
    title: {
      fontSize: 32,
      lineHeight: 46,
      fontFamily: 'Sora-Bold',
    },
    large: {
      fontSize: 36,
    },
    extra_large: {
      fontSize: 64,
      fontWeight: 'bold',
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
});

export const useTheme = () => {
  return useRestyleTheme<Theme>();
};

export const makeStyles = <T extends NamedStyles<T> | NamedStyles<unknown>>(
  styles: (theme: Theme) => T
) => {
  return () => {
    return styles(theme);
  };
};

export type Theme = typeof theme;
export default theme;
