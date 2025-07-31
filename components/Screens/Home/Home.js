import { View, Text, ScrollView, Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Row from './Row'
import Category from './Category'

const Home = () => {

    const [food, setFood] = useState([])
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()

    useEffect(() => {
        const fetchFood = async () => {

            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setFood(data.meals);



        }
        fetchFood();
        
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: 'antiquewhite' }}>
            <View style={{ height: 70, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', width: '95%', alignSelf: 'center', borderRadius: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>Kwa-Mzakesman</Text>
            </View>
            <View style={{ height: 30, marginTop: 3, justifyContent: 'center', alignItems: 'center', width: '95%', alignSelf: 'center', borderRadius: 10, borderWidth: 1, borderColor: 'orange' }}>
                <Text style={{ alignSelf: 'center' }}>Today's picks</Text>
            </View>
            <View style={{ height: 200, marginTop: 5 }}>
                <Row item={food} navigation={navigation} />
            </View>
            <View style={{ height: 40, margin: 3, justifyContent: 'center', alignItems: 'center', width: '95%', alignSelf: 'center', borderRadius: 10, borderWidth: 1, borderColor: 'orange' }}>
                <Text style={{ alignSelf: 'center' }}>Search by category</Text>
            </View>
            <ScrollView>
                <Category name={'A - Z'} />
                <Category name={'Starters'} />
                <Category name={'Breakfast'} />
                <Category name={'Beef'} />
                <Category name={'Chicken'} />
                <Category name={'Desserts'} />
                <Category name={'Pasta'} />
                <Category name={'Pork'} />
                <Category name={'Miscellaneous'} />
                <Category name={'Seafood'} />
                <Category name={'Side'} />
                <Category name={'Vegan'} />
                <Category name={'Vegetarian'} />
                <View style={{ height: 50 }}>

                </View>
            </ScrollView>
        </View>
    )
}

export default Home