import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const AddIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 6v12M6 12h12"
    />
  </Svg>
);
