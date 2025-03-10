import { Stack, Link, Redirect } from 'expo-router';
import { FlatList } from 'react-native';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import { useStorage } from '~/core/storage';
import { useFetchProducts } from '~/query/hooks';
import { Text } from '~/theme';

export default function Home() {
  const [isOnboarded] = useStorage('is_onboarded');

  if (!isOnboarded) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
    </>
  );
}
