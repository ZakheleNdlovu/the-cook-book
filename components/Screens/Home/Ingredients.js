import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Ingredients = ({ item }) => {
    return (

        <View>
            <Text style={styles.textBox}>{item.strIngredient1} - {item.strMeasure1}</Text>
            <Text style={styles.textBox}>{item.strIngredient2} - {item.strMeasure2}</Text>
            <Text style={styles.textBox}>{item.strIngredient3} - {item.strMeasure3}</Text>
            <Text style={styles.textBox}>{item.strIngredient4} - {item.strMeasure4}</Text>
            <Text style={styles.textBox}>{item.strIngredient5} - {item.strMeasure5}</Text>
            <Text style={styles.textBox}>{item.strIngredient6} - {item.strMeasure6}</Text>
            <Text style={styles.textBox}>{item.strIngredient7} - {item.strMeasure7}</Text>
            <Text style={styles.textBox}>{item.strIngredient8} - {item.strMeasure8}</Text>
            <Text style={styles.textBox}>{item.strIngredient9} - {item.strMeasure9}</Text>
            <Text style={styles.textBox}>{item.strIngredient10} - {item.strMeasure10}</Text>
            <Text style={styles.textBox}>{item.strIngredient11} - {item.strMeasure11}</Text>
            <Text style={styles.textBox}>{item.strIngredient12} - {item.strMeasure12}</Text>
            <Text style={styles.textBox}>{item.strIngredient13} - {item.strMeasure13}</Text>
            <Text style={styles.textBox}>{item.strIngredient14} - {item.strMeasure14}</Text>
            <Text style={styles.textBox}>{item.strIngredient15} - {item.strMeasure15}</Text>
            <Text style={styles.textBox}>{item.strIngredient16} - {item.strMeasure16}</Text>
            <Text style={styles.textBox}>{item.strIngredient17} - {item.strMeasure17}</Text>
            <Text style={styles.textBox}>{item.strIngredient18} - {item.strMeasure18}</Text>
            <Text style={styles.textBox}>{item.strIngredient19} - {item.strMeasure19}</Text>
            <Text style={styles.textBox}>{item.strIngredient20} - {item.strMeasure20}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    textBox: {
        padding: 5,
        backgroundColor: 'antiquewhite',
        borderRadius: 8,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: 'orange'
    }
})

export default Ingredients