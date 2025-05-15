import { Image, StyleSheet } from 'react-native';
import { SlideOutUp } from 'react-native-reanimated';

import { Box } from '~/theme';
import AnimatedBox from '~/theme/AnimatedBox';

interface AnimatedSplashScreenProps {
  isVisible: boolean;
}

export function AnimatedSplashScreen({ isVisible }: AnimatedSplashScreenProps) {
  return (
    <Box pointerEvents="none" style={StyleSheet.absoluteFill}>
      {isVisible ? (
        <AnimatedBox exiting={SlideOutUp} flex={1} backgroundColor="darkGray">
          <Image
            source={require('~/assets/splash.png')}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </AnimatedBox>
      ) : null}
    </Box>
  );
}
