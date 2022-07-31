import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/routes/authStack';
const App = () => {
  return(
    <>
    <NavigationContainer>
    <NativeBaseProvider>
        <AuthStack />
    </NativeBaseProvider>
    </NavigationContainer>
    </>
  )
}


export default App;
