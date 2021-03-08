import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import React from 'react';
import Header from '../shared/header';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation}) => {
            return { headerTitle: () => <Header navigation={navigation} title='About RecipeReview'/>}}
        },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'gray',
            height: 60,
            headerTintColor: '#333'
        }
    }
});

export default AboutStack;