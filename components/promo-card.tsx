import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Box, Text } from '~/theme';

const PROMO_CARD_BG = require('~/assets/images/promo-bg.png');

export const PromoCard = () => {
  return (
    <Box borderRadius="ml_16" overflow="hidden">
      <Image source={PROMO_CARD_BG} style={styles.promoCard} />
      <Box
        style={StyleSheet.absoluteFill}
        paddingHorizontal="ml_24"
        paddingVertical="sm_12"
        gap="s_8"
        alignItems="flex-start">
        <Box
          backgroundColor="red"
          borderRadius="l_8"
          paddingHorizontal="xs_6"
          paddingVertical="xs_4">
          <Text variant="title" fontSize={14} lineHeight={16} color="white">
            Promo
          </Text>
        </Box>
        <Box>
          <Box style={{ ...StyleSheet.absoluteFillObject, top: 8 }}>
            <Text variant="title" fontSize={32} color="black" letterSpacing={-10} lineHeight={36}>
              ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮
            </Text>
          </Box>
          <Text variant="title" fontSize={32} color="white">
            {'Buy one get\none FREE'}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  promoCard: {
    width: '100%',
    height: 140,
  },
});
