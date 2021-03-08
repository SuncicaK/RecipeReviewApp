import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title}) {
    const openMenu= () => {
        navigation.openDrawer();
    }
    return(
        <View style={styles.header}>
            <MaterialIcons 
                name='menu' 
                size={28} 
                onPress={openMenu} 
                style={styles.icons}/>
            <View style={styles.headerTitle}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'gray'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 21,
        color: 'white',
        letterSpacing: 1
    },
    icons: {
        position: 'absolute',
        left: 15,
        color: 'white'
    },
    headerTitle:{
        flexDirection: 'row'
    },
   

});