import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const Row = ({ item, navigation }) => {
    return (

        <ScrollView style={{ height: 200, backgroundColor: 'antiquewhite', width: '95%', alignSelf: 'center' }} showsHorizontalScrollIndicator={false} horizontal>

            {item.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => navigation.navigate('Details', { item: item })} style={{ width: 260, height: 190, justifyContent: 'center', alignItems: 'center' }}>
                    <ImageBackground source={{ uri: item.strMealThumb }} borderRadius={10} style={{ width: 250, height: 175, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderWidth: 1, borderColor: 'black', borderRadius: 10 }}>
                        <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10, opacity: 0.8 }}>

                            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' }}>{item.strMeal}</Text>
                            <Text style={{ fontSize: 16, textAlign: 'center', alignSelf: 'center' }}>{item.strArea}</Text>

                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            ))}
        </ScrollView>

    )
}

export default Row