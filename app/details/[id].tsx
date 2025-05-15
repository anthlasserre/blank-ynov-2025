import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import { Image } from 'react-native';
import { FadeInDown, FadeIn } from 'react-native-reanimated';

import { useFetchProductById } from '~/query/hooks';
import { Box, Text } from '~/theme';
import AnimatedBox from '~/theme/animated-box';

const imageURL =
  'https://images.pexels.com/photos/529414/pexels-photo-529414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

export default function Details() {
  const { id } = useLocalSearchParams();
  const { data } = useFetchProductById(Number(id));

  return (
    <Box flex={1} backgroundColor="black">
      <AnimatedBox entering={FadeIn.duration(1500)}>
        <Image
          source={{ uri: imageURL }}
          style={{ width: '100%', height: 231, position: 'absolute' }}
        />
      </AnimatedBox>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
        style={{
          width: '100%',
          height: 231,
          position: 'absolute',
        }}
      />
      <AnimatedBox entering={FadeInDown.duration(500).delay(1000)} padding="l_32">
        <Box alignItems="flex-end">
          <Box width={50} height={50} backgroundColor="white" borderRadius="full" />
        </Box>
        <Text variant="title" color="white">
          {data?.name}
        </Text>
        <Text variant="body" color="purple">
          Description
        </Text>
      </AnimatedBox>
    </Box>
  );
}
