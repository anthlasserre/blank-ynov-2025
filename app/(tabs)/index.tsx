import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useMemo, useState } from 'react';
import { RefreshControl } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CardItem } from '~/components/card-item';
import { PromoCard } from '~/components/promo-card';
import { SearchHeader } from '~/components/search-header';
import { Skeleton } from '~/components/skeleton';
import { Product, useGetAllProducts } from '~/core/query/use-get-all-products';
import { Box, Text, makeStyles, useTheme } from '~/theme';

const fakeArray = Array.from({ length: 4 }, (_, index) => index);
const colors = ['#111111', '#313131'] as const;

export default function Home() {
  const [search, setSearch] = useState('');
  const { data: initialData, isLoading, isRefetching, refetch } = useGetAllProducts();

  const filteredData = useMemo(() => {
    if (search.length === 0) {
      return initialData;
    }
    return initialData?.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  }, [initialData, search]);

  const { top } = useSafeAreaInsets();
  const styles = useStyles();
  const { spacing } = useTheme();

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
      return <CardItem key={item.id} item={item} onPress={onPress} />;
    },
    [onPress]
  );

  return (
    <>
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
    </>
  );
}

const useStyles = makeStyles((theme) => {
  const { bottom, top } = useSafeAreaInsets();
  return {
    gradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      height: 280,
    },
    gradientContainer: {
      margin: -theme.spacing.ml_24,
      marginTop: -top - theme.spacing.ml_24,
    },
    columnWrapper: {
      gap: theme.spacing.m_16,
    },
    contentContainer: {
      paddingTop: top,
      paddingHorizontal: theme.spacing.ml_24,
      paddingBottom: bottom,
      gap: theme.spacing.m_16,
    },
  };
});
