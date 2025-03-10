import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EmptyScreen } from "../components/EmptyScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

// Create a native stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={EmptyScreen} />
        <Stack.Screen name="SecondScreen" component={EmptyScreen} />
      </Stack.Navigator>
    </QueryClientProvider>
  );
}
