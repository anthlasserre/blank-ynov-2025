import { Stack, Redirect } from 'expo-router';

import { useStorage } from '~/core/storage';

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
