import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { AnimatedTouchable } from './animated-touchable';

import { Product } from '~/api';
import { WINDOW_WIDTH } from '~/core/dimensions';
import { AddIcon } from '~/icons/add';
import { Box, Text } from '~/theme';
import { formatPrice } from '~/utils/price';

export interface CardItemProps {
  item: Product;
  onPress: (item: Product) => void;
}

const MAX_WIDTH = WINDOW_WIDTH / 2 - 24 - 8;

export const CardItem = ({ item, onPress }: CardItemProps) => {
  return (
    <AnimatedTouchable
      onPress={() => onPress(item)}
      borderRadius="ml_16"
      padding="s_8"
      paddingBottom="sm_12"
      backgroundColor="white"
      maxWidth={MAX_WIDTH}>
      <Image source={{ uri: item.image_url }} style={styles.image} resizeMode="cover" />
      <Box gap="xs_4">
        <Text variant="title" fontSize={16}>
          {item.name}
        </Text>
        <Text variant="body" fontSize={12} color="gray">
          {item.region}
        </Text>
      </Box>
      <Box flexDirection="row" justifyContent="space-between" alignItems="center">
        <Text variant="title" fontSize={18}>
          {formatPrice(item.price)}
        </Text>
        <Box aspectRatio={1} backgroundColor="purple" borderRadius="l_8" padding="s_8">
          <AddIcon width={16} height={16} />
        </Box>
      </Box>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 12,
    paddingBottom: 8,
  },
});
