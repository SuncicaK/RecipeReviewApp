import * as React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/drawer';



export default function App() {
  const [loaded] = useFonts({
    LobsterBold: require('./assets/fonts/LobsterTwo-Bold.ttf'),
    LobsterRegular: require('./assets/fonts/LobsterTwo-Regular.ttf'),
  });

  if(loaded) {
  return (
      <Navigator />
  );
  }else{
    return <AppLoading />;
  }
}

