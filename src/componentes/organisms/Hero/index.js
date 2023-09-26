import React from 'react'
import { HeroContainer, HeroImageBackground, ContainerText, map } from './styles'
import { Text } from '~/componentes/atomos'
import { View } from 'react-native'

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: 'https://pcdob.org.br/wp-content/uploads/2021/09/Foto_-Corpo-de-Bombeiros_Divulgacao.jpeg',
        }}
      ></HeroImageBackground>
      <View>
        <Text size={50} ml={15} mt={-75}>
          Prevênção de {'\n'} Incêndio
        </Text>
      </View>

      <View>
        <Text size={18} ml={28} mt={33} mb={15}>
          Curso
        </Text>
        <Text size={13} ml={28} mr={28} mt={0} style={{ textAlign: 'justify' }}>
          O CPCIF capacita operacionalmente os voluntarios e militares de outras
          instituições a desempenharem a função de combatente florestal, a fim
          de elevar a eficiência e a segurança das operações de prevenção e
          combate a incêndio florestal no bioma cerrado, bem como nos demais
          biomas do Brasil.O CPCIF é destinado à especialização de oficiais.
        </Text>
        <Text size={18} ml={28} mt={33} mb={15}>
          Local
        </Text>

        
      </View>
    </HeroContainer>
  )
}
