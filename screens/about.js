import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
    return(
        <ImageBackground style={globalStyles.container}
            source={require('../assets/placeholder.jpg')}>
                <Text style={globalStyles.aboutText}>About:</Text>
                <Text style={globalStyles.aboutText}>
                    Review Recipe app is app for reviewing your recipes. This app was created for all food lovers that need secon opinion.
                    So feel free to add your recipe, as well as your review of that recipe and help others. 
                </Text>
        </ImageBackground>
    )
}
