import { createStackNavigator } from 'react-navigation-stack';
import Homepage from '../screens/homepage';
import ReviewRecipe from '../screens/reviewRecipe';
import React from 'react';
import Header from '../shared/header';

const screens = {
    Homepage: {
        screen: Homepage, 
        navigationOptions: ({ navigation }) => {
        return { headerTitle: () => <Header navigation={navigation} title='Recipes'/>}}
    },
    ReviewRecipe: {
        screen: ReviewRecipe,
        navigationOptions: {
            headerTitle: 'Recipe Review',
            headerTintColor: 'white',
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'gray',
            height: 80,
        }
    }
});

export default HomeStack;