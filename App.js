import 'react-native-gesture-handler';
import React from 'react';
import { Routes } from './src/routes';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { useFonts, DelaGothicOne_400Regular } from '@expo-google-fonts/dela-gothic-one';
import { theme } from './src/styles';

export default function App() {
  let [fontLoaded] = useFonts({
    DelaGothicOne_400Regular,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
