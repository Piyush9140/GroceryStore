import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NativeBaseProvider} from 'native-base';
import {theme} from './utils/constants';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNavigation} from './navigation/AuthNavigation';
import {AppNavigation} from './navigation/AppNavigation';
import {Splash} from './screens/Splash';

const Stack = createStackNavigator();

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen name="Splash" options={{headerShown: false}}>
            {props => <Splash {...props} isSignedIn={isSignedIn} />}
          </Stack.Screen>
          {!isSignedIn ? (
            <Stack.Screen
              name="Auth"
              component={AuthNavigation}
              options={{headerShown: false}}
            />
          ) : (
            <Stack.Screen
              name="App"
              component={AppNavigation}
              options={{headerShown: false}}
            />
          )}
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
