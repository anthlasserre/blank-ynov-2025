import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { runOnJS, useAnimatedScrollHandler } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { WINDOW_WIDTH } from '~/core/dimensions';
import { useTheme } from '~/theme';

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

  const { bottom } = useSafeAreaInsets();
  const { spacing } = useTheme();

  const isLastSlide = slideIndex === slides.length - 1;

  const scrollHandler = useAnimatedScrollHandler((event) => {
    const contentOffsetX = event.contentOffset.x;
    const slideIndex = Math.round(contentOffsetX / WINDOW_WIDTH);
    runOnJS(setSlideIndex)(slideIndex);
  });

  return (
    <ScrollView horizontal pagingEnabled style={styles.container}>
      {slides.map((slide, index) => null)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});
