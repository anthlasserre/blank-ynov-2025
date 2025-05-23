import { Box, Text } from 'theme';

import { EditScreenInfo } from './edit-screen-info';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center" padding="s_8">
      <Text variant="title">{title}</Text>
      <Box height={1} marginVertical="l_32" width="80%" backgroundColor="gray" />
      <EditScreenInfo path={path} />
      {children}
    </Box>
  );
};
