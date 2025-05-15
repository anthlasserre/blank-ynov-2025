import { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Ynov Coffee',
  slug: 'ynov-project-2025',
  version: '1.0.0',
  scheme: 'blank-ynov-2025',
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/favicon.png',
  },
  plugins: ['expo-router', 'expo-font'],
  experiments: {
    typedRoutes: true,
    tsconfigPaths: true,
  },
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.anthlasserre.ynovproject2025',
    infoPlist: {
      NSLocalNotificationUsageDescription: 'This app needs access to send notifications to you.',
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.anthlasserre.ynovproject2025',
    permissions: ['android.permission.POST_NOTIFICATIONS'],
  },
  updates: {
    url: 'https://u.expo.dev/6c6bcdf1-c950-49c4-b971-5984881cf2d0',
  },
  runtimeVersion: {
    policy: 'appVersion',
  },
  extra: {
    router: {
      origin: false,
    },
    eas: {
      projectId: '6c6bcdf1-c950-49c4-b971-5984881cf2d0',
    },
  },
  owner: 'anthlasserre',
});
