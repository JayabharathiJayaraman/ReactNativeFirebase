import React, {useEffect}from 'react';
import RootScreen from './screens/RootScreen';
import { fbInit } from './services/firebaseService';

const App = () => {
  useEffect(() => {
   fbInit();
  }, [])
   return <RootScreen/>;
};

export default App;