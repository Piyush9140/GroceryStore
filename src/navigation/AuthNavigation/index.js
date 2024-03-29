import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../../screens/Login';
import {OTPScreen} from '../../screens/OTP';
import {AddPersonalDetails} from '../../screens/AddPersonalDetails';
import {Splash} from '../../screens/Splash';

const Stack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OTP"
        component={OTPScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Personal Details"
        component={AddPersonalDetails}
        options={{
          headerStyle: {height: 100},
          headerTitleContainerStyle: {paddingLeft: 10},
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};
