import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const DownCaret = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="#D8D8D8"
      d="M2.607 5.149a.438.438 0 0 1 .57-.042l.049.042L7 8.923l3.774-3.774a.438.438 0 0 1 .57-.042l.049.042c.155.155.17.398.042.57l-.042.049L7.309 9.85a.438.438 0 0 1-.57.042l-.048-.042-4.084-4.083a.437.437 0 0 1 0-.619Z"
    />
  </Svg>
);
