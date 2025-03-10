import * as React from 'react';
import Svg, { SvgProps, Rect, Path, Mask, G } from 'react-native-svg';

export const FilterIcon = (props: SvgProps) => (
  <Svg width={52} height={52} fill="none" viewBox="0 0 52 52" {...props}>
    <Rect width={52} height={52} fill="#C67C4E" rx={12} />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M24.4 31.494h-5.25a.625.625 0 0 1 0-1.25h5.25a.625.625 0 0 1 0 1.25ZM31.992 23.417h-5.25a.625.625 0 0 1 0-1.25h5.25a.625.625 0 0 1 0 1.25Z"
      clipRule="evenodd"
    />
    <Mask
      id="a"
      width={6}
      height={6}
      x={18}
      y={20}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}>
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M18.5 20.167h5.188v5.16H18.5v-5.16Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M21.094 21.417a1.34 1.34 0 0 0-1.344 1.33c0 .734.603 1.33 1.344 1.33.742 0 1.344-.596 1.344-1.33 0-.734-.602-1.33-1.344-1.33Zm0 3.91a2.59 2.59 0 0 1-2.594-2.58 2.591 2.591 0 0 1 2.594-2.58 2.59 2.59 0 0 1 2.594 2.58 2.59 2.59 0 0 1-2.594 2.58Z"
        clipRule="evenodd"
      />
    </G>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M30.49 29.507c-.742 0-1.345.596-1.345 1.33 0 .734.603 1.33 1.345 1.33.74 0 1.343-.596 1.343-1.33 0-.734-.602-1.33-1.343-1.33Zm0 3.91a2.59 2.59 0 0 1-2.595-2.58 2.59 2.59 0 0 1 2.595-2.58 2.59 2.59 0 0 1 2.593 2.58 2.59 2.59 0 0 1-2.593 2.58Z"
      clipRule="evenodd"
    />
  </Svg>
);
