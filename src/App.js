import React from 'react';
import {Login} from './screens/Loginscreen';
import {NativeBaseProvider} from 'native-base';
import { theme } from './utils/constants';

function App() {
  return (
    // This is temporary and a navigator would be added here
    <NativeBaseProvider theme={theme}>
      <Login />
    </NativeBaseProvider>
  );
}

export default App;
