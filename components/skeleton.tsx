import React, { useEffect } from 'react';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import AnimatedBox from '~/theme/AnimatedBox';
import { BoxProps } from '~/theme/Box';

const DEFAULT_COLORS = ['#E0E0E0', '#F0F0F0'] as [string, string];

interface SkeletonProps extends BoxProps {
  colors?: [string, string];
}

export const Skeleton = ({ width, height, colors = DEFAULT_COLORS, ...props }: SkeletonProps) => {
  const animatedValue = useSharedValue(0);

  useEffect(() => {
    animatedValue.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(animatedValue.value, [0, 1], colors),
    };
  });

  return (
    <AnimatedBox
      width={width}
      height={height}
      borderRadius="ml_16"
      backgroundColor="gray"
      style={animatedStyle}
      {...props}
    />
  );
};
