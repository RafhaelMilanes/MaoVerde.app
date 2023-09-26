import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Logo, Container } from '../../componentes';
import { useEffect } from 'react';


export const SplashScreen = ({navigation}) => {
  useEffect(() =>{
    setTimeout(() => {
      navigation.navigate('Home')
    }, 2000);
  }, [navigation])


  return (
    <Container align='center' justify='center'>
      
      <Logo />
    
      <StatusBar style="auto" />
    </Container>
  )
}
