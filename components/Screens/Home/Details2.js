import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ingredients from './Ingredients'

const Details2 = () => {

    const [items, setItems] = useState([])
    const route = useRoute()
    const { item } = route.params;
    const navigation = useNavigation()

    useEffect(() => {
        const fetchItem = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.idMeal}`);
            if (!response.ok) {
                throw new Error({ message: 'No meals found' });
            }
            const data = await response.json();

            setItems(data.meals[0]);
        }
        fetchItem()
    }, [])
    return (
        <View style={{ height: '100%', backgroundColor: 'antiquewhite' }}>
            <View style={{ padding: 20, backgroundColor: 'orange', borderRadius: 10, margin: 10, flexDirection: 'row' }}>
                <View style={{ width: '75%', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                    <Text style={{ color: 'black', fontSize: 24, textAlign: 'center', }}>{items.strMeal}</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: '25%', height: 30, backgroundColor: 'antiquewhite', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'black' }}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'orange', padding: 5, borderRadius: 10, marginBottom: 10, marginTop: 5, alignItems: 'center', width: '90%', alignSelf: 'center' }}>
                <Text style={{ fontSize: 17 }}>{items.strCategory}</Text>
            </View>
            <Image source={{ uri: items.strMealThumb }} width={'92%'} height={240} style={{ alignSelf: 'center' }} />


            <ScrollView style={{ padding: 20, margin: 10, backgroundColor: 'white', borderRadius: 10 }}>
                <View style={{ marginBottom: 10 }}>
                    <View style={{ backgroundColor: 'orange', padding: 10, borderRadius: 10, marginBottom: 4, alignItems: 'center' }}>
                        <Text style={{ fontSize: 17 }}>Ingredients</Text>

                    </View>
                    <View >
                        <Ingredients item={items} />
                    </View>
                </View>
                <View style={{ backgroundColor: 'orange', padding: 10, borderRadius: 10, marginBottom: 10, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17 }}>Instructions</Text>
                </View>
                <Text style={{ fontSize: 15 }}>{items.strInstructions}</Text>

                <View style={{ height: 150 }}>

                </View>
            </ScrollView>

        </View >
    )
}

export default Details2