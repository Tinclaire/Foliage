import React from 'react';

import NavigatorProvider from './src/navigators/navigator';
import { AuthProvider } from './src/context/AuthProvider';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <NavigatorProvider />
    </AuthProvider>
  );
};

export default App;
