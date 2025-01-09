import { Stack } from "expo-router";
import { Provider } from 'react-redux';

import store from '@/redux/store';

export default function RootLayout() 
{
  return (
    <Provider store={store}>
      <Stack 
        screenOptions={{
          headerStyle: { backgroundColor: "#6200ea" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerShown: false,
        }}
      >
        <Stack.Screen name="(onboarding)/splash" options={{ headerShown: false }} />
        <Stack.Screen name="(onboarding)/onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/login" />
        <Stack.Screen name="(auth)/register" />
        <Stack.Screen name="(app)/index" />
      </Stack>      
    </Provider>
  
  )
}
