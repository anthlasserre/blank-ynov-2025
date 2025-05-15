import { Pressable } from 'react-native';
import { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

import AnimatedBox from '~/theme/animated-box';
import { BoxProps } from '~/theme/box';

interface AnimatedTouchableProps extends BoxProps {
  scale?: number;
  onPress?: () => void;
}

export const AnimatedTouchable = ({
  children,
  scale = 0.95,
  onPress,
  ...props
}: AnimatedTouchableProps) => {
  const animatedScale = useSharedValue(1);

  const handlePressIn = () => {
    animatedScale.value = withSpring(scale);
  };

  const handlePressOut = () => {
    animatedScale.value = withSpring(1);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: animatedScale.value }],
    };
  });

  return (
    <AnimatedBox style={animatedStyle} {...props}>
      <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={onPress}>
        {children}
      </Pressable>
    </AnimatedBox>
  );
};
