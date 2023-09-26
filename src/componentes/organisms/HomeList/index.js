import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'
import { Text } from '../../atomos'
import { ListContainer } from './styles'
import {theme}from '~/styles/theme'


export const HomeList = ({data, title}) => {
  return (
    <ListContainer>
        <Text ml={24}>{title}</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{
            paddingTop:theme.metrics.px(19),
            paddingLeft:theme.metrics.px(24),
            paddingBottom:theme.metrics.px(24),
            borderRadius:theme.metrics.px(50),
        }}
      />
    </ListContainer>
  )
}
