import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet } from 'react-native';
import { FadeInDown, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';

import { WINDOW_HEIGHT, WINDOW_WIDTH } from '~/core/dimensions';
import { Box, Text } from '~/theme';
import AnimatedBox from '~/theme/animated-box';

interface HorizontalSliderItemProps {
  index: number;
  imgURI: string;
  title: string;
  desc: string;
  currentSlideIndex: number;
  scrollX: SharedValue<number>;
}

export default function HorizontalSliderItem({
  index,
  imgURI,
  title,
  desc,
  currentSlideIndex,
  scrollX,
}: HorizontalSliderItemProps) {
  const animatedStyle = useAnimatedStyle(() => {
    //   const translateX = interpolate(
    //     scrollX.value,
    //     [index * WINDOW_WIDTH, (index + 1) * WINDOW_WIDTH],
    //     [0, WINDOW_WIDTH]
    //   );
    const opacity = interpolate(
      scrollX.value,
      [(index - 1) * WINDOW_WIDTH, index * WINDOW_WIDTH, (index + 1) * WINDOW_WIDTH],
      [0, 1, 0]
    );
    return {
      opacity,
      // transform: [{ translateX }],
    };
  });

  const isCurrentSlide = currentSlideIndex === index;

  return (
    <>
      <StatusBar style="light" />
      <Box flex={1} width={WINDOW_WIDTH} alignItems="center" paddingBottom="m_16" zIndex={index}>
        <AnimatedBox style={[StyleSheet.absoluteFill, animatedStyle]}>
          <Image source={{ uri: imgURI }} style={styles.image} />
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
            style={StyleSheet.absoluteFill}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 0.8 }}
          />
        </AnimatedBox>
        {/* <Box>
          <Image source={{ uri: imgURI }} style={styles.image} />
        </Box> */}
        {isCurrentSlide ? (
          <Box flex={1} justifyContent="flex-end" padding="ml_24" gap="s_8">
            <AnimatedBox entering={FadeInDown.delay(500)}>
              <Text variant="title" textAlign="center" color="white">
                {title}
              </Text>
            </AnimatedBox>
            <AnimatedBox entering={FadeInDown.delay(1000)}>
              <Text variant="body" textAlign="center" color="foundationGreyLighter">
                {desc}
              </Text>
            </AnimatedBox>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: WINDOW_HEIGHT / 2,
  },
});
