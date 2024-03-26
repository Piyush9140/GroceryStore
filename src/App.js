import React from 'react';
import {Login} from './screens/Loginscreen';
import {NativeBaseProvider} from 'native-base';
import { theme } from './utils/constants';
import { OTPScreen } from './screens/OTPScreen';

function App() {
  return (
    // This is temporary and a navigator would be added here
    <NativeBaseProvider theme={theme}>
      {/* <Login /> */}
      <OTPScreen />
    </NativeBaseProvider>
  );
}

export default App;
