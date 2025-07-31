import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image } from 'react-native';

const Meals2 = () => {

    const [items, setItems] = useState([])
    const navigation = useNavigation()

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name[0].toUpperCase() + name.slice(1).toLowerCase()}`);
            if (!response.ok) {
                throw new Error({ message: `Failes to load` });
            }
            const data = await response.json();
            setItems(data.meals);
        }

        fetchItems()


    }, [])

    const route = useRoute()
    const { name } = route.params;


    if (items !== null) {
        return (
            <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: 'black' }}>{name}</Text>
                <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%', alignSelf: 'center' }}>
                    {items.map((item, index) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Details2', { item: item })} key={index}>
                            <View style={{ padding: 15, backgroundColor: 'antiquewhite', borderRadius: 8, marginBottom: 5, borderWidth: 1, borderColor: 'orange', width: '90%', alignSelf: 'center', marginTop: 5 }}>
                                <Image source={{ uri: item.strMealThumb }} style={{ width: '100%', height: 150, borderRadius: 8 }} />
                                <Text style={{ fontWeight: 'bold' }}>{item.strMeal}</Text>

                            </View>
                        </TouchableOpacity>
                    ))}
                    <View style={{ height: 60 }}></View>
                </ScrollView>
            </View>
        )
    }
    else {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: 'black' }}>No meals found for {name}</Text>
            </View>
        )
    }

}

export default Meals2