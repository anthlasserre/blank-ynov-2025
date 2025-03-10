import { ThemeProvider } from '@shopify/restyle';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { theme } from 'theme';

import { AnimatedSplashScreen } from '~/components/AnimatedSplashScreen';
import { useIsTimeoutReady } from '~/hooks/use-is-timeout-ready';
import { asyncStoragePersister, queryClient } from '~/query/client';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    'Sora-Bold': require('../assets/fonts/Sora-Bold.ttf'),
    'Sora-ExtraBold': require('../assets/fonts/Sora-ExtraBold.ttf'),
    'Sora-ExtraLight': require('../assets/fonts/Sora-ExtraLight.ttf'),
    'Sora-Light': require('../assets/fonts/Sora-Light.ttf'),
    'Sora-Medium': require('../assets/fonts/Sora-Medium.ttf'),
    'Sora-Regular': require('../assets/fonts/Sora-Regular.ttf'),
    'Sora-SemiBold': require('../assets/fonts/Sora-SemiBold.ttf'),
    'Sora-Thin': require('../assets/fonts/Sora-Thin.ttf'),
  });
  const isTimeoutReady = useIsTimeoutReady(loaded || Boolean(error));

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: asyncStoragePersister }}>
      <ThemeProvider theme={theme}>
        <Stack />
        <AnimatedSplashScreen isVisible={!isTimeoutReady} />
      </ThemeProvider>
    </PersistQueryClientProvider>
  );
}
