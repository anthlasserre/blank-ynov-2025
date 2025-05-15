import { Redirect, Stack, Tabs } from 'expo-router';

import { useStorage } from '~/core/storage';

export default function Layout() {
  const [isOnboarded] = useStorage('is_onboarded', 'true');

  if (isOnboarded !== 'true') {
    return <Redirect href="/onboarding" />;
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Tabs screenOptions={{ headerShown: false }} />
    </>
  );
}
