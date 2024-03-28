import 'react-native-gesture-handler';
import React from 'react';
import {Login} from './screens/Auth/Login';
import {NativeBaseProvider} from 'native-base';
import {theme} from './utils/constants';
import {OTPScreen} from './screens/Auth/OTP';
import {Splash} from './screens/Auth/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStack} from './navigation/AuthNavigation';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
