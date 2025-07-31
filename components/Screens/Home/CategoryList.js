import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import Category from './Category'
import C_Options from './C_Options'

const CategoryList = () => {

    const route = useRoute()
    const { item } = route.params;

    if (item.toLowerCase() == 'a - z') {
        return (
            <View>
                <View style={{ padding: 20, backgroundColor: 'orange', borderRadius: 10, margin: 2, width: '95%', alignSelf: 'center', alignItems: 'center' }}>
                    <Text>{item}</Text>
                </View>
                <ScrollView style={{ backgroundColor: 'antiquewhite', borderRadius: 10, width: '95%', alignSelf: 'center' }}>
                    <C_Options name={'A'} />
                    <C_Options name={'B'} />
                    <C_Options name={'C'} />
                    <C_Options name={'D'} />
                    <C_Options name={'E'} />
                    <C_Options name={'F'} />
                    <C_Options name={'G'} />
                    <C_Options name={'H'} />
                    <C_Options name={'I'} />
                    <C_Options name={'J'} />
                    <C_Options name={'K'} />
                    <C_Options name={'L'} />
                    <C_Options name={'M'} />
                    <C_Options name={'N'} />
                    <C_Options name={'O'} />
                    <C_Options name={'P'} />
                    <C_Options name={'Q'} />
                    <C_Options name={'R'} />
                    <C_Options name={'S'} />
                    <C_Options name={'T'} />
                    <C_Options name={'U'} />
                    <C_Options name={'V'} />
                    <C_Options name={'W'} />
                    <C_Options name={'X'} />
                    <C_Options name={'Y'} />
                    <C_Options name={'Z'} />
                    <View style={{ height: 150 }}>

                    </View>
                </ScrollView>

            </View >
        )
    }

    if (item.toLowerCase() == 'starters') {
        return (
            <View>
                <View style={{ padding: 20, backgroundColor: 'orange', borderRadius: 10, margin: 2, width: '95%', alignSelf: 'center', alignItems: 'center' }}>
                    <Text>{item}</Text>
                </View>

            </View>
        )
    }

    if (item.toLowerCase() == 'breakfast') {
        return (
            <View>
                <View style={{ padding: 20, backgroundColor: 'orange', borderRadius: 10, margin: 2, width: '95%', alignSelf: 'center', alignItems: 'center' }}>
                    <Text>{item}</Text>
                </View>

            </View>
        )
    }

    if (item.toLowerCase() == 'beef') {
        return (
            <View>
                <View style={{ padding: 20, backgroundColor: 'orange', borderRadius: 10, margin: 2, width: '95%', alignSelf: 'center', alignItems: 'center' }}>
                    <Text>{item}</Text>
                </View>

            </View>
        )
    }

    if (item.toLowerCase() == 'chicken') {
        return (
            <View>
                <View style={{ padding: 20, backgroundColor: 'orange', borderRadius: 10, margin: 2, width: '95%', alignSelf: 'center', alignItems: 'center' }}>
                    <Text>{item}</Text>
                </View>

            </View>
        )
    }

    if (item.toLowerCase() == 'desserts') {
        return (
            <View>
                <View style={{ padding: 20, backgroundColor: 'orange', borderRadius: 10, margin: 2, width: '95%', alignSelf: 'center', alignItems: 'center' }}>
                    <Text>{item}</Text>
                </View>

            </View>
        )
    }

    if (item.toLowerCase() == 'pasta') {
        return (
            <View>
                <View style={{ padding: 20, backgroundColor: 'orange', borderRadius: 10, margin: 2, width: '95%', alignSelf: 'center', alignItems: 'center' }}>
                    <Text>{item}</Text>
                </View>

            </View>
        )
    }

    if (item.toLowerCase() == 'pork') {
        return (
            <View>
                <View style={{ padding: 20, backgroundColor: 'orange', borderRadius: 10, margin: 2, width: '95%', alignSelf: 'center', alignItems: 'center' }}>
                    <Text>{item}</Text>
                </View>

            </View>
        )
    }

    if (item.toLowerCase() == 'miscellaneous') {
        return (
            <View>
                <View style={{ padding: 20, backgroundColor: 'orange', borderRadius: 10, margin: 2, width: '95%', alignSelf: 'center', alignItems: 'center' }}>
                    <Text>{item}</Text>
                </View>

            </View>
        )
    }

    if (item.toLowerCase() == 'seafood') {
        return (
            <View>
                <View style={{ padding: 20, backgroundColor: 'orange', borderRadius: 10, margin: 2, width: '95%', alignSelf: 'center', alignItems: 'center' }}>
                    <Text>{item}</Text>
                </View>

            </View>
        )
    }

    if (item.toLowerCase() == 'side') {
        return (
            <View>
                <View style={{ padding: 20, backgroundColor: 'orange', borderRadius: 10, margin: 2, width: '95%', alignSelf: 'center', alignItems: 'center' }}>
                    <Text>{item}</Text>
                </View>

            </View>
        )
    }

    if (item.toLowerCase() == 'vegan') {
        return (
            <View>
                <View style={{ padding: 20, backgroundColor: 'orange', borderRadius: 10, margin: 2, width: '95%', alignSelf: 'center', alignItems: 'center' }}>
                    <Text>{item}</Text>
                </View>

            </View>
        )
    }

    if (item.toLowerCase() == 'vegetarian') {
        return (
            <View>
                <View style={{ padding: 20, backgroundColor: 'orange', borderRadius: 10, margin: 2, width: '95%', alignSelf: 'center', alignItems: 'center' }}>
                    <Text>{item}</Text>
                </View>

            </View>
        )
    }
}

export default CategoryList