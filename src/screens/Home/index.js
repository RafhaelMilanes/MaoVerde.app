import React from 'react'
import { Container, HomeList, Text, Logo, ScreenScrollContainer, Caterories, Hero } from '../../componentes'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const FAKE_DATA_CHARACTERES = [
    {
      id: 0,
      image_url:
        'https://s2-g1.glbimg.com/0zgNnAolzTP8Md3XiE641Ekgmvw=/0x0:950x633/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/u/9/r2J6AFTFKC6s9axcjCMQ/quaimada-cerrado-2.jpg',
      title:'Dar Vader',
      subtitle:'subtitle',
      description:'São José dos Campos vai ganhar em breve com uma nova Unidade de Conservação de Proteção Integral, o Parque Municipal do Cerrado, na região sul da cidade. Entre os objetivos do parque está a proteção da riqueza da fauna e flora do Bioma Cerrado, assim como conservar as águas.',
    
    },
    {
      id: 1,
      image_url:
        'https://i.pinimg.com/564x/95/7b/0f/957b0fad70f36020edb222910a6cd486.jpg',
    },
    {
      id: 2,
      image_url:
        'https://i.pinimg.com/564x/76/0d/39/760d39ae7930607d6f4b47255933e17e.jpg',
    },
    {
      id: 3,
      image_url:
        'https://i.pinimg.com/564x/91/79/64/91796452ccfe41e051a20ae0fdc92bbc.jpg',
    },
  ]


export const Home = () => {
  return (
    <ScreenScrollContainer>
      <View style={{ flexDirection: 'row', marginTop: 29, marginLeft: 24 }}>
        <Logo />
        <Text style={{ marginLeft: 14 }}>
          Polly {'\n'}
          <Text size={14}>Dias</Text>
        </Text>
        <Container style={{ marginLeft: 205 }} >
            <Ionicons name="notifications-outline" size={28} color="white"  />
        </Container>
        
        
      </View>
      
      <View style={{marginTop:40}}>
        <HomeList title="Próximas Atividades" data={FAKE_DATA_CHARACTERES}/>
      </View>
      
      <View style={{ marginTop: 59, marginLeft: 24 }}>
        <Caterories/>
      </View>
      
      

    </ScreenScrollContainer>
  )
}
