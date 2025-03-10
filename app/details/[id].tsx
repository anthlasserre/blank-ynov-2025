import { Stack, useLocalSearchParams } from 'expo-router';
import { FadeInDown } from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import { useFetchProductById } from '~/query/hooks';
import { Box, Text } from '~/theme';
import { AnimatedBox } from '~/theme/AnimatedBox';

export default function Details() {
  const { id } = useLocalSearchParams();
  const { data, isLoading, isError } = useFetchProductById(Number(id));

  return (
    <AnimatedBox entering={FadeInDown.delay(1000)} flex={1}>
      <Text variant="title" textAlign="center" color="black">
        {data?.title}
      </Text>
    </AnimatedBox>
  );
}
