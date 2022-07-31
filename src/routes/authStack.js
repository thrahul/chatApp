import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../views/screens/welcome/Welcome';
import PhoneNumber from '../views/screens/phoneNumber/PhoneNumber';
import HomeScreen from '../views/screens/Home/Home';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}  />
        <Stack.Screen name='PhoneNumber' component={PhoneNumber} options={{headerShown: false}}  />
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;