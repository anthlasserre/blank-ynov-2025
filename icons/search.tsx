import * as React from 'react';
import Svg, { SvgProps, Mask, Path, G } from 'react-native-svg';

export const Search = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Mask
      id="a"
      width={17}
      height={17}
      x={1}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}>
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M1.667 1.667h16.23v16.23H1.667V1.668Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M9.782 2.917a6.873 6.873 0 0 0-6.865 6.865 6.874 6.874 0 0 0 6.865 6.866 6.873 6.873 0 0 0 6.865-6.866 6.873 6.873 0 0 0-6.865-6.865Zm0 14.98c-4.475 0-8.115-3.64-8.115-8.115s3.64-8.115 8.115-8.115 8.115 3.64 8.115 8.115-3.64 8.116-8.115 8.116Z"
        clipRule="evenodd"
      />
    </G>
    <Mask
      id="b"
      width={5}
      height={5}
      x={14}
      y={14}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}>
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M14.367 14.756h4.186v4.179h-4.186v-4.18Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#b)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M17.928 18.935c-.159 0-.319-.061-.441-.183l-2.937-2.928a.625.625 0 0 1 .883-.886l2.937 2.93a.624.624 0 0 1-.442 1.067Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
