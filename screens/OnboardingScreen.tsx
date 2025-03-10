import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

import HorizontalSlider from '~/components/HorizontalSlider';
import { Box } from '~/theme';

const slides = [
  {
    imgURI:
      'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Fall in Love with Coffee in Blissful Delight!',
    desc: 'Welcome to our cozy coffee corner, where every cup is a delightful for you.',
  },
  {
    imgURI:
      'https://images.pexels.com/photos/333523/pexels-photo-333523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Welcome to the App',
    desc: 'This is a description for the app',
  },
  {
    imgURI:
      'https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Welcome to the App',
    desc: 'This is a description for the app',
  },
];

export default function OnboardingScreen() {
  const { setItem } = useAsyncStorage('is_onboarded');
  const router = useRouter();

  const onEnd = () => {
    setItem('true');
    router.replace('/(tabs)');
  };

  return (
    <Box backgroundColor="black" flex={1}>
      <HorizontalSlider slides={slides} onEnd={onEnd} />
    </Box>
  );
}
