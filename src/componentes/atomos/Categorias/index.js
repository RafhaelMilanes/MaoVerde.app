import React from 'react'
import { View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Text } from '../Text'
import { categoryData } from '../constants'
import { Container } from '../Container'

export const Caterories = () => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categoryData.map((cat, index) => {
          return (
            <TouchableOpacity key={index}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ marginRight: 25 }}>
                  <Image
                    source={{ uri: cat.image }}
                    style={{ width: 70, height: 70, borderRadius: 35 }}
                  />
                </View>


              </View>

              <Text className="text-neutral-600" style={{ fontSize: 12, alignItems:'center' }}>
                {cat.name}
              </Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}
