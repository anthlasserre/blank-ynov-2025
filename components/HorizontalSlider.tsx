import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  runOnJS,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from './Button';
import HorizontalSliderItem from './HorizontalSliderItem';

import { WINDOW_WIDTH } from '~/core/dimensions';
import { Box, useTheme } from '~/theme';
import { AnimatedBox } from '~/theme/AnimatedBox';

interface HorizontalSliderProps {
  slides: {
    imgURI: string;
    title: string;
    desc: string;
  }[];
  onEnd: () => void;
}

export default function HorizontalSlider({ slides, onEnd }: HorizontalSliderProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const scrollX = useSharedValue(0);

  const { bottom } = useSafeAreaInsets();
  const { spacing } = useTheme();

  const isLastSlide = slideIndex === slides.length - 1;

  const scrollHandler = useAnimatedScrollHandler((event) => {
    const contentOffsetX = event.contentOffset.x;
    scrollX.value = contentOffsetX;
    const slideIndex = Math.round(contentOffsetX / WINDOW_WIDTH);
    runOnJS(setSlideIndex)(slideIndex);
  });

  return (
    <Box flex={1}>
      {/* Slides */}
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        horizontal
        pagingEnabled
        style={styles.container}>
        {slides.map((slide, index) => (
          <HorizontalSliderItem
            currentSlideIndex={slideIndex}
            key={index}
            index={index}
            scrollX={scrollX}
            {...slide}
          />
        ))}
      </Animated.ScrollView>
      <AnimatedBox
        key={`${isLastSlide}`}
        entering={FadeIn.delay(1000)}
        exiting={FadeOut}
        padding="m_16"
        gap="ml_24"
        style={{ paddingBottom: bottom + spacing['ml_24'] }}>
        {/* Pagination */}
        {!isLastSlide ? (
          <Box gap="s_8" flexDirection="row" justifyContent="center">
            {slides.map((_, index) => (
              <Box
                key={index}
                width={8}
                height={8}
                borderRadius="full"
                backgroundColor={slideIndex === index ? 'foundationBrownNormal' : 'darkGray'}
              />
            ))}
          </Box>
        ) : (
          <Box>
            <Button title="Get Started" onPress={onEnd} />
          </Box>
        )}
      </AnimatedBox>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});
