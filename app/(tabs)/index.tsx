import { LinearGradient } from 'expo-linear-gradient';
import { Link, Tabs, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, RefreshControl, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DownCaret } from '~/assets/DownCart';
import { FirstIconSvg } from '~/assets/FirstIcon';
import { useFetchProducts } from '~/query/hooks';
import { Box, Text, useTheme } from '~/theme';

export default function Home() {
  const router = useRouter();
  const { data, refetch, isRefetching } = useFetchProducts();
  const { top } = useSafeAreaInsets();
  const { spacing } = useTheme();

  const handlePress = () => {
    router.push('/details/1');
  };

  return (
    <>
      <StatusBar style="light" />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <FirstIconSvg />;
          },
        }}
      />
      <Box padding="ml_24" height={280} style={{ paddingTop: top + spacing['ml_24'] }}>
        <LinearGradient
          colors={['#313131', '#111111']}
          style={StyleSheet.absoluteFill}
          start={{
            x: 0,
            y: 1,
          }}
          end={{
            x: 1,
            y: 0,
          }}
        />
        <Box gap="s_8">
          <Text variant="body" color="foundationGreyLighter" fontSize={14}>
            Location
          </Text>
          <Box gap="xs_4" flexDirection="row">
            <Text variant="bodyBold" color="foundationSurfaceNormal" fontSize={16}>
              Bordeaux, France
            </Text>
            <DownCaret width={14} />
          </Box>
        </Box>
      </Box>
      {/* <FlatList
        data={data}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Link href={`/details/${item.id}`} asChild>
            <TouchableOpacity>
              <Box
                padding="s_8"
                gap="s_8"
                paddingHorizontal="m_16"
                flexDirection="row"
                alignItems="center">
                <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
                <Box flex={1}>
                  <Text variant="body" color="black">
                    {item.title}
                  </Text>
                </Box>
              </Box>
            </TouchableOpacity>
          </Link>
        )}
      /> */}
    </>
  );
}
