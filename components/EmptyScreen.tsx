import { useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';

export const EmptyScreen = () => {
  const route = useRoute();
  const screenTitle = route.name;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{screenTitle}</Text>
    </View>
  );
};
