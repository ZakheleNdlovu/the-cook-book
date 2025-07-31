import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Screens/Home/Home'
import Details from './Screens/Home/Details'
import { NavigationContainer } from '@react-navigation/native'
import CategoryList from './Screens/Home/CategoryList'
import Meals from './Screens/Home/Meals'
import Meals2 from './Screens/Home/Meals2'
import Details2 from './Screens/Home/Details2'

const Stack = createNativeStackNavigator()
const Bottom = createBottomTabNavigator()

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
            <Stack.Screen name="CategoryList" component={CategoryList} options={{ headerShown: false }} />
            <Stack.Screen name="Meals" component={Meals} options={{ headerShown: false }} />
            <Stack.Screen name="Meals2" component={Meals2} options={{ headerShown: false }} />
            <Stack.Screen name="Details2" component={Details2} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const Navigators = () => {
    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    )
}

export default Navigators