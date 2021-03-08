import React from 'react';
import { StyleSheet, View, Text, Button, Image, ImageBackground} from 'react-native';
import {globalStyles, images} from '../styles/global';
import Card from '../shared/card';

export default function ReviewRecipe({ navigation }) {
    const rating = navigation.getParam('rating')
    
    return(
        <ImageBackground style={globalStyles.container}
            source={require('../assets/placeholder.jpg')}>
                <Card>
                    <Text style={styles.textOne}>{navigation.getParam('title')}</Text>
                    <Text style={styles.text}>Recipe: {navigation.getParam('recipe')}</Text>
                    <Text style={styles.text}>Recipe review: {navigation.getParam('body')}</Text>
            <View style={styles.rating}>
                    <Text style={styles.text}> Recipe rating: </Text>
                    <Image source={images.ratings[rating]}/> 
            </View>
                </Card>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopColor: '#eee'
    },
    textOne: {
        color: 'white',
        padding: 8,
        fontFamily: 'LobsterRegular',
        fontSize: 25,
        left: 78
    },
    text: {
        color: 'white',
        padding: 8,
        fontFamily: 'LobsterRegular',
        fontSize: 20
    }
})

