import React, { useCallback, useState } from 'react';
import { TextInput } from 'react-native';

import { Search } from '~/icons/search';
import { Box, Text, useTheme } from '~/theme';

interface SearchHeaderProps {
  setSearch: (search: string) => void;
}

export const SearchHeader = ({ setSearch: _setSearch }: SearchHeaderProps) => {
  const [search, setSearch] = useState('');

  const onSearch = useCallback((text: string) => {
    setSearch(text);
    _setSearch(text);
  }, []);

  const { textVariants } = useTheme();
  return (
    <Box paddingVertical="ml_24" gap="ml_24">
      <Box gap="s_8">
        <Text color="gray">Location</Text>
        <Text color="white" variant="title">
          Bordeaux, France
        </Text>
      </Box>
      <Box flexDirection="row" gap="m_16">
        <Box
          flex={1}
          backgroundColor="darkGray"
          flexDirection="row"
          gap="s_8"
          alignItems="center"
          padding="m_16"
          borderRadius="l_12">
          <Search width={20} height={20} />
          <TextInput
            placeholder="Search coffee"
            placeholderTextColor="gray"
            value={search}
            onChangeText={onSearch}
            style={{
              ...textVariants.title,
              ...{
                fontSize: 14,
                lineHeight: 16,
                color: 'white',
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
