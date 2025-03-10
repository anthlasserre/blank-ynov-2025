import * as React from 'react';
import Svg, { SvgProps, Path, G, Defs, ClipPath } from 'react-native-svg';

export const FirstIconSvg = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#0E1418"
        fillRule="evenodd"
        d="M24.5 12.075C24.5 5.409 19.124 0 12.5 0S.5 5.41.5 12.075c0 6.03 4.387 11.03 10.134 11.925v-8.444H7.569v-3.481h3.065V9.413c0-3.021 1.78-4.7 4.523-4.7 1.31 0 2.67.249 2.67.249v2.947h-1.508c-1.496 0-1.965.945-1.965 1.89v2.263h3.337l-.532 3.482h-2.805v8.444c5.759-.883 10.146-5.882 10.146-11.913Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h24v24H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
