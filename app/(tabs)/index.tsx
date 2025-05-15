import { LinearGradient } from 'expo-linear-gradient';
import * as Notifications from 'expo-notifications';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useMemo, useState } from 'react';
import { RefreshControl } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Product } from '~/api';
import { Button } from '~/components/button';
import { CardItem } from '~/components/card-item';
import { PromoCard } from '~/components/promo-card';
import { SearchHeader } from '~/components/search-header';
import { Skeleton } from '~/components/skeleton';
import { useFetchProducts } from '~/query/hooks';
import { Box, Text, makeStyles, useTheme } from '~/theme';
import AnimatedBox from '~/theme/animated-box';

const fakeArray = Array.from({ length: 4 }, (_, index) => index);
const colors = ['#111111', '#313131'] as const;

export default function Home() {
  const [search, setSearch] = useState('');

  const router = useRouter();
  const { data, refetch, isRefetching, isLoading } = useFetchProducts();
  const { top } = useSafeAreaInsets();
  const styles = useStyles();
  const { spacing } = useTheme();

  const filteredData = useMemo(() => {
    if (!data) {
      return [];
    }
    if (search.length === 0) {
      return data;
    }
    return data?.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  }, [data, search]);

  const onPress = (item: Product) => {
    router.push(`/details/${item.id}`);
  };

  const renderHeader = useCallback(() => {
    return (
      <>
        <Box style={styles.gradientContainer}>
          <LinearGradient
            colors={colors}
            style={styles.gradient}
            start={{
              y: 1,
              x: 0,
            }}
            end={{
              y: 0,
              x: 1,
            }}
          />
        </Box>
        <Box paddingBottom="ml_24" style={{ paddingTop: top + spacing['l_32'] }}>
          <SearchHeader setSearch={setSearch} />
          <PromoCard />
        </Box>
      </>
    );
  }, [setSearch]);

  const renderEmpty = useCallback(() => {
    if (isLoading) {
      return fakeArray.map((item) => {
        const isEven = item % 2 === 0;
        return (
          <Box key={item} flex={1} paddingRight={isEven ? 's_8' : undefined}>
            <Skeleton width="100%" height="100%" />
          </Box>
        );
      });
    }
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text variant="title">No data</Text>
      </Box>
    );
  }, [isLoading]);

  const renderItem = useCallback(
    ({ item }: { item: Product }) => {
      return (
        <AnimatedBox entering={FadeIn.duration(1000)} exiting={FadeOut.duration(1000)}>
          <CardItem key={item.id} item={item} onPress={onPress} />
        </AnimatedBox>
      );
    },
    [onPress]
  );

  return (
    <Box flex={1}>
      <StatusBar style="light" animated />
      <Animated.FlatList
        data={filteredData}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} tintColor="white" />
        }
        windowSize={5}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={styles.columnWrapper}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
      />
      <Box alignItems="center">
        <Button
          title="Send"
          onPress={async () => {
            try {
              await Notifications.scheduleNotificationAsync({
                content: {
                  title: 'Eh reviens 🔔',
                  body: 'Here is the notification body',
                  badge: 5,
                  data: {
                    data: 'goes here',
                  },
                },
                trigger: {
                  type: Notifications.SchedulableTriggerInputTypes.DATE,
                  date: new Date(Date.now() + 1000 * 10), // 10 seconds from now
                },
              });
              console.log('Notification scheduled');
            } catch (error) {
              console.log(error);
            }
          }}
        />
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  gradientContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 280,
  },
  gradient: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: theme.spacing['ml_24'],
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
}));
