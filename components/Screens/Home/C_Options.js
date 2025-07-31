import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'


const C_Options = ({ name }) => {

    const navigation = useNavigation()

    if (name.toLowerCase() === 'starters' || name.toLowerCase() === 'desserts' || name.toLowerCase() === 'breakfast' || name.toLowerCase() === 'beef' || name.toLowerCase() === 'chicken' || name.toLowerCase() === 'pork' || name.toLowerCase() === 'seafood' || name.toLowerCase() === 'vegetarian' || name.toLowerCase() === 'miscellaneous' || name.toLowerCase() === 'goat' || name.toLowerCase() === 'pasta' || name.toLowerCase() === 'side') {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Meals2', { name: name })}>
                <View style={{ padding: 10, backgroundColor: 'antiquewhite', borderRadius: 8, marginBottom: 5, borderWidth: 1, borderColor: 'orange', width: '90%', backgroundColor: 'orange', alignSelf: 'center', marginTop: 5 }}>
                    <Text>{name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Meals', { name: name })}>
            <View style={{ padding: 10, backgroundColor: 'antiquewhite', borderRadius: 8, marginBottom: 5, borderWidth: 1, borderColor: 'orange', width: '90%', backgroundColor: 'orange', alignSelf: 'center', marginTop: 5 }}>
                <Text>{name}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default C_Options