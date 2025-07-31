import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ImageBackground } from 'react-native-web';
import { ScrollView } from 'react-native';
import Ingredients from './Ingredients';

const Details = () => {

    const route = useRoute()
    const { item } = route.params;
    const navigation = useNavigation()
    return (
        <View style={{ height: '100%', backgroundColor: 'antiquewhite' }}>
            <View style={{ padding: 20, backgroundColor: 'orange', borderRadius: 10, margin: 10, flexDirection: 'row' }}>
                <View style={{ width: '75%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 24, textAlign: 'center', }}>{item.strMeal}</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: '25%', height: 30, backgroundColor: 'antiquewhite', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'black' }}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'orange', padding: 5, borderRadius: 10, marginBottom: 10, marginTop: 5, alignItems: 'center', width: '90%', alignSelf: 'center' }}>
                <Text style={{ fontSize: 17 }}>{item.strCategory}</Text>
            </View>
            <Image source={{ uri: item.strMealThumb }} width={'92%'} height={240} style={{ alignSelf: 'center' }} />


            <ScrollView style={{ padding: 20, margin: 10, backgroundColor: 'white', borderRadius: 10 }}>
                <View style={{ marginBottom: 10 }}>
                    <View style={{ backgroundColor: 'orange', padding: 10, borderRadius: 10, marginBottom: 4, alignItems: 'center' }}>
                        <Text style={{ fontSize: 17 }}>Ingredients</Text>

                    </View>
                    <View >
                        <Ingredients item={item} />
                    </View>
                </View>
                <View style={{ backgroundColor: 'orange', padding: 10, borderRadius: 10, marginBottom: 10, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17 }}>Instructions</Text>
                </View>
                <Text style={{ fontSize: 15 }}>{item.strInstructions}</Text>

                <View style={{ height: 150 }}>

                </View>
            </ScrollView>

        </View >
    )
}

export default Details