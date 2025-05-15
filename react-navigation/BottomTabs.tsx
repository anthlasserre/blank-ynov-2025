import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { FirstIconSvg } from '../assets/FirstIcon';
import { EmptyScreen } from '../components/empty-screen';

// Create a native stack navigator
const Stack = createNativeStackNavigator();

const EmptyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FirstScreen" component={EmptyScreen} />
      <Stack.Screen name="SecondScreen" component={EmptyScreen} />
    </Stack.Navigator>
  );
};

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="FirstTab"
            component={EmptyStack}
            options={{
              tabBarIcon: ({ focused }) => {
                return <FirstIconSvg />;
              },
            }}
          />
          <Tab.Screen
            name="SecondTab"
            component={EmptyStack}
            options={{
              tabBarIcon: FirstIconSvg,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
