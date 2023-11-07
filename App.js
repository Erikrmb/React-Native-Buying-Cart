import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Cart from './src/pages/Cart';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mock from './src/mocks/cart'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ fonts ] = useFonts({
    "RegularMontserrat": Montserrat_400Regular,
    "BoldMontserrat": Montserrat_700Bold,
  })
  

  if (!fonts){
    return null
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar/>
      <Cart {...mock} />
    </SafeAreaView>
  );
}

